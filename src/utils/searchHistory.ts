const key = 'xiajin-search-history';

export function readSearchHistory(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? '[]');
    return Array.isArray(value)
      ? value
          .filter((item): item is string => typeof item === 'string' && !!item.trim())
          .slice(0, 8)
      : [];
  } catch {
    return [];
  }
}

export function rememberSearch(query: string): string[] {
  const next = [query, ...readSearchHistory().filter((item) => item !== query)].slice(0, 8);
  try {
    localStorage.setItem(key, JSON.stringify(next));
  } catch {
    /* Storage may be disabled in private browsers. */
  }
  return next;
}
