export function stripHashFromUrl(): void {
  const { pathname, search, hash, href } = window.location
  if (hash || href.endsWith('#') || href.endsWith('/#')) {
    history.replaceState(null, '', pathname + search)
  }
}

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth'): void {
  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
}

export function resolveInitialHash(): void {
  const id = window.location.hash.slice(1)
  if (!id) {
    stripHashFromUrl()
    return
  }

  requestAnimationFrame(() => {
    scrollToSection(id, 'auto')
    stripHashFromUrl()
  })
}
