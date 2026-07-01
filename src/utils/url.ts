export function stripBareHash(): void {
  const { pathname, search, href } = window.location
  if (href.endsWith('#') || href.endsWith('/#')) {
    history.replaceState(null, '', pathname + search)
  }
}
