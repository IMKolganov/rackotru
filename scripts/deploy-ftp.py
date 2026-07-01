#!/usr/bin/env python3
"""One-off FTP deploy: sync dist/ to http/public/ and remove legacy Laravel root files."""

from __future__ import annotations

import ftplib
import os
from pathlib import Path

HOST = os.environ.get('FTP_HOST', 'ftp.raca42.1gb.ru')
USER = os.environ.get('FTP_USER', 'w_raca42_53ff6643')
PASS = os.environ.get('FTP_PASS')
ROOT = 'http'
PUBLIC = f'{ROOT}/public'
DIST = Path(__file__).resolve().parents[1] / 'dist'

LEGACY_ROOT_ENTRIES = [
    '.editorconfig',
    '.env',
    '.env.example',
    '.gitattributes',
    '.gitignore',
    '.htaccess',
    '.styleci.yml',
    'README.md',
    'app',
    'artisan',
    'bootstrap',
    'composer-setup.php',
    'composer.json',
    'composer.lock',
    'composer.phar',
    'config',
    'database',
    'package.json',
    'phpunit.xml',
    'rackot',
    'resources',
    'routes',
    'server.php',
    'storage',
    'tests',
    'vendor',
    'webpack.mix.js',
]


def connect() -> ftplib.FTP:
    if not PASS:
        raise SystemExit('FTP_PASS environment variable is required')
    ftp = ftplib.FTP(HOST, timeout=120)
    ftp.encoding = 'latin-1'
    ftp.login(USER, PASS)
    return ftp


def is_dir(ftp: ftplib.FTP, path: str) -> bool:
    cwd = ftp.pwd()
    try:
        ftp.cwd(path)
        ftp.cwd(cwd)
        return True
    except ftplib.error_perm:
        return False


def list_names(ftp: ftplib.FTP, path: str) -> list[str]:
    names = ftp.nlst(path)
    prefix = f'{path}/'
    result: list[str] = []
    for entry in names:
        name = entry[len(prefix):] if entry.startswith(prefix) else entry.split('/')[-1]
        if name not in ('.', '..'):
            result.append(name)
    return result


def delete_path(ftp: ftplib.FTP, path: str) -> None:
    if not is_dir(ftp, path):
        try:
            ftp.delete(path)
        except ftplib.error_perm:
            pass
        return

    for name in list_names(ftp, path):
        child = f'{path}/{name}'
        if is_dir(ftp, child):
            delete_path(ftp, child)
            try:
                ftp.rmd(child)
            except ftplib.error_perm:
                pass
        else:
            try:
                ftp.delete(child)
            except ftplib.error_perm:
                pass


def ensure_dir(ftp: ftplib.FTP, path: str) -> None:
    parts = path.split('/')
    current = ''
    for part in parts:
        current = f'{current}/{part}' if current else part
        try:
            ftp.mkd(current)
        except ftplib.error_perm:
            pass


def upload_file(ftp: ftplib.FTP, local: Path, remote: str) -> None:
    with local.open('rb') as handle:
        ftp.storbinary(f'STOR {remote}', handle)


def upload_tree(ftp: ftplib.FTP, local_dir: Path, remote_dir: str) -> None:
    ensure_dir(ftp, remote_dir)
    for item in sorted(local_dir.iterdir()):
        remote = f'{remote_dir}/{item.name}'
        if item.is_dir():
            upload_tree(ftp, item, remote)
        else:
            print(f'  upload {remote}')
            upload_file(ftp, item, remote)


def remove_entry(ftp: ftplib.FTP, name: str) -> None:
    path = f'{ROOT}/{name}'
    if is_dir(ftp, path):
        delete_path(ftp, path)
        try:
            ftp.rmd(path)
        except ftplib.error_perm:
            pass
        print(f'  removed {path}/')
        return

    try:
        ftp.delete(path)
        print(f'  removed {path}')
    except ftplib.error_perm:
        pass


def main() -> None:
    if not DIST.is_dir():
        raise SystemExit(f'Missing build output: {DIST}')

    ftp = connect()
    try:
        print('Clearing http/public/ …')
        delete_path(ftp, PUBLIC)

        print('Uploading dist/ → http/public/ …')
        upload_tree(ftp, DIST, PUBLIC)

        print('Removing legacy Laravel files from http/ …')
        for name in LEGACY_ROOT_ENTRIES:
            remove_entry(ftp, name)
    finally:
        ftp.quit()

    print('Done.')


if __name__ == '__main__':
    main()
