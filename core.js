/* GIS Project Showcase — core
 *
 * Loading order (first one that returns projects wins), so something always shows:
 *   1. Backend API        GET  {api}/projects         (live, includes admin edits at once)
 *   2. Static manifest    GET  {base}data/projects.json
 *   3. Embedded manifest  <script src="data/projects.js">  (works even when opened from file://)
 *   4. Browser cache      last good copy kept in localStorage
 *
 * Every <img> built by GIS.img() retries: thumbnail → original → original with a fresh
 * cache key → backend file route → a labelled placeholder. A picture never silently vanishes.
 */
(function (w) {
  'use strict';
  const CACHE_KEY = 'gis-showcase:manifest:v1';
  const cfg = { base: '', api: 'api' };

  /* ---------- tiny DOM helper ---------- */
  const h = (tag, attrs, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    kids.flat(Infinity).forEach((c) => { if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
    return e;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const arrow = () => h('span', { html: '<svg class="gs-arrow" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>' }).firstChild;

  /* ---------- coordinates ---------- */
  const dms = (v, pos, neg) => {
    const a = Math.abs(v); let d = Math.floor(a), m = Math.round((a - d) * 60);
    if (m === 60) { d++; m = 0; }
    return `${d}°${String(m).padStart(2, '0')}′${v < 0 ? neg : pos}`;
  };
  const fmtCoords = (c) => (c && c.lat != null && c.lng != null ? `${dms(c.lat, 'N', 'S')} ${dms(c.lng, 'E', 'W')}` : '');

  const KINDS = { map: ['Map', 'Maps'], satellite: ['Satellite image', 'Satellite imagery'], graph: ['Graph', 'Graphs'], screenshot: ['Screenshot', 'Screenshots'], other: ['Figure', 'Other'] };

  /* ---------- config ---------- */
  function configFrom(el) {
    const d = (el && el.dataset) || {};
    if (d.base != null) cfg.base = d.base && !d.base.endsWith('/') ? d.base + '/' : d.base;
    if (d.api) cfg.api = d.api.replace(/\/$/, '');
    return cfg;
  }

  /* ---------- loading ---------- */
  async function getJSON(url, ms = 3500) {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), ms);
    try {
      const r = await fetch(url, { signal: ctl.signal, cache: 'no-store' });
      if (!r.ok) throw new Error(r.status);
      return await r.json();
    } finally { clearTimeout(t); }
  }

  function normalize(db) {
    const projects = (db && db.projects) || [];
    projects.forEach((p) => {
      p.images = p.images || [];
      p.images.forEach((im, i) => {
        const v = im.v ? `?v=${im.v}` : '';
        im.url = `${cfg.base}projects/${p.slug}/images/${encodeURIComponent(im.file)}${v}`;
        im.thumbUrl = im.thumb ? `${cfg.base}projects/${p.slug}/thumbs/${encodeURIComponent(im.thumb)}${v}` : null;
        im.apiUrl = `${cfg.api}/projects/${p.slug}/images/${im.id}/file`;
        im.fig = i + 1; im.project = p.slug;
      });
      const cid = p.cover && p.cover.id ? p.cover.id : p.cover;
      p.cover = p.images.find((i) => i.id === cid) || p.images[0] || null;
      ['brief', 'objectives', 'methodology', 'dataSources', 'software', 'findings', 'stats', 'tags', 'compares'].forEach((k) => { p[k] = p[k] || []; });
    });
    return projects;
  }

  async function load() {
    const attempts = [
      ['backend', () => getJSON(`${cfg.api}/projects`)],
      ['static manifest', () => getJSON(`${cfg.base}data/projects.json`)],
      ['embedded manifest', async () => { if (w.__GIS_PROJECTS__) return w.__GIS_PROJECTS__; throw new Error('none'); }],
      ['browser cache', async () => { const c = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); if (c) return c; throw new Error('none'); }],
    ];
    for (const [source, run] of attempts) {
      try {
        const db = await run();
        if (db && db.projects && db.projects.length) {
          try { localStorage.setItem(CACHE_KEY, JSON.stringify(db)); } catch (_) { /* storage full or blocked */ }
          return { projects: normalize(db), source };
        }
      } catch (_) { /* try the next source */ }
    }
    return { projects: [], source: 'none' };
  }

  /* ---------- images that always show ---------- */
  const placeholder = (name) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#e4e9e2"/><path d="M0 0 1200 800M1200 0 0 800" stroke="#cdd6cd" stroke-width="3"/><text x="600" y="404" text-anchor="middle" font-family="sans-serif" font-size="34" fill="#55655a">Image not found: ${esc(name)}</text></svg>`);

  /** opts: { eager, sizes, full }  full:true uses the original file rather than the thumbnail */
  function img(im, alt, opts = {}) {
    const el = new Image();
    el.alt = alt || im.alt || im.caption || '';
    el.decoding = 'async';
    el.loading = opts.eager ? 'eager' : 'lazy';
    if (im.w && im.h) { el.width = im.w; el.height = im.h; }          // reserves the true aspect ratio
    const chain = [im.url, im.url + (im.url.includes('?') ? '&' : '?') + 'r=' + Date.now(), im.apiUrl, placeholder(im.file)];
    if (!opts.full && im.thumbUrl) {
      el.srcset = `${im.thumbUrl} ${im.tw || 1200}w, ${im.url} ${im.w || 4000}w`;
      el.sizes = opts.sizes || '(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 33vw';
      el.src = im.thumbUrl;
    } else el.src = im.url;
    let step = 0;
    const next = () => {
      if (step >= chain.length) return;
      el.removeAttribute('srcset'); el.removeAttribute('sizes');
      if (step === chain.length - 1) el.dataset.state = 'missing';
      el.src = chain[step++];
    };
    el.addEventListener('error', next);
    el.addEventListener('load', () => { el.dataset.state = el.dataset.state || 'ok'; });
    setTimeout(() => { if (el.dataset.state !== 'ok' && el.complete && el.naturalWidth === 0) next(); }, 8000);
    return el;
  }

  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('gs-theme', root.dataset.theme); } catch (_) { /* ignore */ }
    return root.dataset.theme;
  }

  w.GIS = { h, esc, arrow, fmtCoords, KINDS, cfg, configFrom, load, normalize, img, toggleTheme };
})(window);
