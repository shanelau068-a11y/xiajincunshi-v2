import { load } from 'cheerio';

export function parseBook(html) {
  const $ = load(html);
  $('script, style, noscript, .page-header-icon, img.icon').remove();
  return $;
}

export function plainText(html) {
  const $ = parseBook(html);
  return $('body').text().replace(/\s+/g, ' ').trim();
}

export function normalizeText(text) {
  return text.replace(/\s+/g, '').replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
}
