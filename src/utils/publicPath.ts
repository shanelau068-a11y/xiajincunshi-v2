const externalPattern = /^(https?:|data:|blob:|mailto:|tel:)/i;

export function withBasePath(value: string | null | undefined) {
  if (!value) return '';
  if (externalPattern.test(value) || value.startsWith('#')) return value;

  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedValue = value.replace(/^\/+/, '');

  if (normalizedBase === '/') return `/${normalizedValue}`;
  return `${normalizedBase}${normalizedValue}`;
}
