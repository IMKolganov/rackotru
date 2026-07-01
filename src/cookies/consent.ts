import { THEME_STORAGE_KEY } from '../theme/types'

export const CONSENT_STORAGE_KEY = 'rackotru-consent'
const LOCALE_STORAGE_KEY = 'rackotru-locale'

export type ConsentChoice = 'accepted' | 'rejected'

export function getConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (value === 'accepted' || value === 'rejected') return value
  } catch {
    // ignore
  }
  return null
}

export function setConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // ignore
  }
}

export function hasFunctionalConsent(): boolean {
  return getConsent() === 'accepted'
}

export function clearFunctionalStorage(): void {
  try {
    localStorage.removeItem(LOCALE_STORAGE_KEY)
    localStorage.removeItem(THEME_STORAGE_KEY)
  } catch {
    // ignore
  }
}
