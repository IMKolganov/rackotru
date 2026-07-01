import { THEME_STORAGE_KEY, type Theme } from './types'

export function isTheme(value: string): value is Theme {
  return value === 'light' || value === 'dark'
}

export function detectTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored && isTheme(stored)) return stored
  } catch {
    // ignore
  }

  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }

  return 'dark'
}

export function saveTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // ignore
  }
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}
