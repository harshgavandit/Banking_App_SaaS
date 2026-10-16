// Query entry works on static hosts without a deep-route rewrite.
// It never activates on an authenticated application path.
export function isPublicDemoEntry(pathname, search) {
  const values = new URLSearchParams(search).getAll('demo');
  return pathname === '/' && values.length === 1 && values[0] === '1';
}
