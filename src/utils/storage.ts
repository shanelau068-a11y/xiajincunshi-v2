export function loadStored<T>(
  key: string,
  validate: (value: unknown) => value is T,
  fallback: T,
): T {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? 'null');
    return validate(value) ? value : fallback;
  } catch {
    return fallback;
  }
}
export function saveStored(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Private browsers can refuse storage. */
  }
}
export type ReadingProgress = { file: string; title: string; part: string };
export function readingProgress() {
  return loadStored<ReadingProgress | null>(
    'xiajin-last-read',
    (v): v is ReadingProgress | null =>
      !!v &&
      typeof v === 'object' &&
      ['file', 'title', 'part'].every((k) => typeof (v as Record<string, unknown>)[k] === 'string'),
    null,
  );
}
