import { withBasePath } from './publicPath';
import DOMPurify from 'dompurify';
import { searchDocs } from '../data/searchDocs';

export const stripHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('script, style, noscript').forEach((node) => node.remove());
  return (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
};

export const tokenizeChinese = (value: string) => {
  const source = value.toLowerCase();
  const tokens = new Set<string>();
  const latin = source.match(/[a-z0-9]+/g) ?? [];
  latin.forEach((token) => tokens.add(token));

  const chineseRuns = source.match(/[\u4e00-\u9fff]+/g) ?? [];
  chineseRuns.forEach((run) => {
    for (let index = 0; index < run.length; index += 1) {
      tokens.add(run[index]);
      if (index < run.length - 1) tokens.add(run.slice(index, index + 2));
      if (index < run.length - 2) tokens.add(run.slice(index, index + 3));
    }
  });

  return [...tokens].filter(Boolean);
};

export const createSnippet = (text: string, keyword: string, radius = 52) => {
  if (!keyword.trim()) return text.slice(0, radius * 2);
  const index = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (index < 0) return text.slice(0, radius * 2);
  const start = Math.max(0, index - radius);
  const end = Math.min(text.length, index + keyword.length + radius);
  return `${start > 0 ? '...' : ''}${text.slice(start, end)}${end < text.length ? '...' : ''}`;
};

export const highlightedParts = (text: string, keyword: string) => {
  if (!keyword.trim()) return [text];
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.split(new RegExp(`(${escaped})`, 'gi')).filter(Boolean);
};

export const normalizeBookHtml = (rawHtml: string, file: string, keyword?: string | null) => {
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
  doc
    .querySelectorAll('script, style, noscript, iframe, object, embed, base, link, meta')
    .forEach((node) => node.remove());
  doc
    .querySelectorAll('.page-header-icon, img.icon, span.icon[data-emoji], img.notion-static-icon')
    .forEach((node) => node.remove());
  doc
    .querySelectorAll('[data-notion-page-icon]')
    .forEach((node) => node.removeAttribute('data-notion-page-icon'));

  const fileDir = file.includes('/') ? file.slice(0, file.lastIndexOf('/') + 1) : '';
  const resolveAsset = (value: string | null) => {
    if (!value || /^(https?:|data:|blob:|\/\/)/i.test(value)) return value ?? '';
    if (value.startsWith('/')) return withBasePath(value);
    const base = new URL(withBasePath(`/book/${fileDir}`), document.baseURI);
    return new URL(value, base).href;
  };

  doc.querySelectorAll('img').forEach((img) => {
    img.setAttribute('src', resolveAsset(img.getAttribute('src')));
    img.setAttribute('loading', 'lazy');
  });

  doc.querySelectorAll('a').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (href && !href.startsWith('#') && !/^(https?:|mailto:|tel:|\/\/)/i.test(href)) {
      const resolved = resolveAsset(href);
      const docFile = searchDocs.find(
        (item) =>
          new URL(withBasePath(`/book/${item.file}`), document.baseURI).pathname ===
          new URL(resolved, document.baseURI).pathname,
      );
      anchor.setAttribute(
        'href',
        docFile
          ? `#/book?file=${encodeURIComponent(docFile.file)}&title=${encodeURIComponent(docFile.title)}&part=${encodeURIComponent(docFile.part)}`
          : resolved,
      );
    }
    if (!anchor.getAttribute('href')?.startsWith('#')) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
  });

  const term = keyword?.trim();
  if (term) {
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

    textNodes.forEach((node) => {
      const text = node.nodeValue ?? '';
      if (!text.toLowerCase().includes(term.toLowerCase())) return;
      const fragment = doc.createDocumentFragment();
      highlightedParts(text, term).forEach((part) => {
        if (part.toLowerCase() === term.toLowerCase()) {
          const mark = doc.createElement('mark');
          mark.textContent = part;
          fragment.appendChild(mark);
        } else {
          fragment.appendChild(doc.createTextNode(part));
        }
      });
      node.parentNode?.replaceChild(fragment, node);
    });
  }

  return DOMPurify.sanitize(doc.body.innerHTML, {
    FORBID_TAGS: ['style', 'iframe', 'object', 'embed', 'form', 'input'],
    ADD_ATTR: ['target'],
  });
};
