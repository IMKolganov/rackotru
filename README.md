# rackotru

Source code for **[rackot.ru](https://rackot.ru)** — personal developer landing page of [Ivan Kolganov](https://github.com/IMKolganov).

VPN & backend developer portfolio: DataGate ecosystem, OpenVPN tooling, .NET/Python stack, and open-source projects from GitHub.

## Features

- **Sections** — Hero, About, Skills, Projects, Contact, Footer
- **i18n** — 39 European languages with browser locale detection and a language picker
- **Themes** — light / dark mode with system preference and persistence
- **Navigation** — fixed header, smooth scroll without hash in the URL
- **Contact** — GitHub, LinkedIn, Instagram, X, Facebook, Telegram, DataGate, Rackot

## Stack

- React 19 + TypeScript
- Vite 6
- Static deploy (Apache on 1gb.ru)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy

Production is a static build uploaded to the hosting document root (`http/` on 1gb.ru).

```bash
npm run build
FTP_PASS='…' python3 scripts/deploy-ftp.py
```

Credentials are passed via environment variables — never commit them to the repo.

## Branches

| Branch | Purpose |
|--------|---------|
| `develop` | Active development |
| `main` | Production releases |
| `archive/laravel-legacy` | Historical Laravel 7 site (2020–2022) |

## Legacy

The original Laravel site from [rackot.ru](https://rackot.ru) hosting is preserved on [`archive/laravel-legacy`](https://github.com/IMKolganov/rackotru/tree/archive/laravel-legacy).

## License

Private personal site. Code is public for reference; ask before reusing.
