const paths = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/>',
  moon: '<path d="M20.8 14A9 9 0 0 1 10 3.2 9 9 0 1 0 20.8 14Z"/>',
  play: '<path d="m9 5 12 7-12 7z"/>',
  music: '<path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="18" cy="16" rx="3" ry="2"/>',
  list: '<path d="M3 5h18M3 10h12M3 15h10m5-2 4 3-4 3zM3 20h10"/>',
  monitor: '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M12 17v4m-4 0h8"/>',
  gear: '<path d="m9 3-.7 2.5-2 .9L4 5.7l-2 3.5L4 11v2l-2 1.8 2 3.5 2.3-.7 2 .9L9 21h4l.7-2.5 2-.9 2.3.7 2-3.5L18 13v-2l2-1.8-2-3.5-2.3.7-2-.9L13 3z"/><circle cx="11" cy="12" r="3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2Z"/><path d="M7 3v6h9V3M7 21v-7h10v7"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  grip: '<path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" stroke-width="3"/>',
  more: '<path d="M5 12h.01M12 12h.01M19 12h.01" stroke-width="3"/>',
  left: '<path d="m14 6-6 6 6 6"/>',
  right: '<path d="m10 6 6 6-6 6"/>',
  up: '<path d="m6 14 6-6 6 6"/>',
  down: '<path d="m6 10 6 6 6-6"/>',
  blank: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 21 18-18"/>',
  keys: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 16h8"/>',
  edit: '<path d="m15 4 5 5M4 20l4-.7L20 7a2 2 0 0 0-3-3L5 16z"/>',
  layers: '<rect x="4" y="5" width="12" height="12" rx="2"/><path d="M8 20h10a2 2 0 0 0 2-2V9"/>',
  upload: '<path d="M12 16V4m-5 5 5-5 5 5M4 16v4h16v-4"/>',
  download: '<path d="M12 4v12m-5-5 5 5 5-5M4 17v3h16v-3"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  trash: '<path d="M3 6h18M9 6V3h6v3m4 0-1 15H6L5 6m5 4v7m4-7v7"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m4 18 6-5 3 2 4-5 4 5"/>',
  wifi: '<path d="M3 9a15 15 0 0 1 18 0m-15 4a10 10 0 0 1 12 0m-9 4a5 5 0 0 1 6 0m-3 3h.01"/>',
};

export const icon = (name) => '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths[name] + '</svg>';
export const escape = (text) => String(text ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const key = (name) => '<kbd>' + escape(name) + '</kbd>';
export function button(action, label, glyph, styles = '', attrs = '') {
  return '<button type="button" class="btn ' + styles + '" data-action="' + action + '" ' + attrs + '>' +
    (glyph ? icon(glyph) : '') + label + '</button>';
}
export function iconButton(action, label, glyph, attrs = '', styles = 'ghost') {
  return button(action, '', glyph, 'icon-button ' + styles, 'title="' + escape(label) +
    '" aria-label="' + escape(label) + '" ' + attrs);
}
export const dataId = (id) => 'data-id="' + escape(id) + '"';
export const inputSearch = (id, placeholder) => '<label class="search">' + icon('search') +
  '<input type="search" id="' + id + '" placeholder="' + escape(placeholder) + '" aria-label="' + escape(placeholder) + '" autocomplete="off"></label>';
export function fileInput(id, accept) {
  return '<input type="file" hidden id="' + id + '" accept="' + accept + '">';
}
export function plural(count, noun) {
  return count + ' ' + noun + (count === 1 ? '' : 's');
}
