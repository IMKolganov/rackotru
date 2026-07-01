# rackotru

Archive of the personal **Rackot** website (Laravel 7, ~2020–2022).

Sources were recovered from 1gb.ru hosting for historical reference. Active development happens on `develop` — a full React rewrite is planned.

## Legacy stack

- PHP 7.2+ / Laravel 7
- MySQL
- Telegram bot (`/telegabot`)

## Local setup

```bash
cp .env.example .env
composer install
php artisan key:generate
php artisan serve
```

## Branches

| Branch | Purpose |
|--------|---------|
| `develop` | Main development branch |
| `main` | Production (after redesign) |
