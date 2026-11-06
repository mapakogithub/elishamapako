/* GIS Project Showcase — admin (needs the Node backend: npm start) */
(function (w) {
  'use strict';
  const { h, configFrom } = w.GIS;
  const root = document.getElementById('gis-admin');
  configFrom(root);
  const API = w.GIS.cfg.api;
  let token = sessionStorage.getItem('gs-token') || '';
  let db = { projects: [] }, cur = null;                       // cur: slug, or 'new'

  async function call(method, path, body) {
    const opt = { method, headers: { 'x-admin-token': token } };
    if (body instanceof FormData) opt.body = body;
    else if (body) { opt.headers['content-type'] = 'application/json'; opt.body = JSON.stringify(body); }
    const r = await fetch(API + path, opt);
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || r.statusText);
    return data;
  }
  const say = (msg, kind) => { const s = root.querySelector('.gs-status'); if (s) { s.textContent = msg; s.className = 'gs-status ' + (kind ? 'is-' + kind : ''); } };
  const lines = (v) => v.split('\n').map((s) => s.trim()).filter(Boolean);
  const pipe = (v, n) => lines(v).map((l) => { const a = l.split('|').map((s) => s.trim()); return n === 2 ? { value: a[0], label: a[1] || '' } : { title: a.length > 1 ? a[0] : '', text: a.length > 1 ? a.slice(1).join(' | ') : a[0] }; });

  /* ---------- login ---------- */
  function login(msg) {
    const input = h('input', { type: 'password', id: 'tok', autocomplete: 'current-password', required: true });
    root.replaceChildren(h('form', { class: 'gs-form gs-login', onsubmit: async (e) => {
      e.preventDefault(); token = input.value.trim();
      try { db = await call('POST', '/rescan'); sessionStorage.setItem('gs-token', token); main(); } catch (err) { login(err.message); }
    } }, h('h2', null, 'Showcase admin'),
      h('label', null, 'Admin token', h('small', null, 'Shown in the terminal on first run and saved in the .admin-token file.'), input),
      h('div', { class: 'gs-actions' }, h('button', { class: 'gs-btn', type: 'submit' }, 'Sign in')),
      h('p', { class: 'gs-status is-err' }, msg || '')));
    input.focus();
  }

  /* ---------- layout ---------- */
  function main() {
    w.GIS.normalize(db);
    const list = h('aside', null,
      h('button', { class: 'gs-btn', type: 'button', onclick: () => { cur = 'new'; main(); } }, '+ New project'),
      h('button', { class: 'gs-btn gs-btn--quiet', type: 'button', onclick: async () => { say('Scanning folders…'); db = await call('POST', '/rescan'); main(); say('Folders scanned: new images are now listed.', 'ok'); } }, 'Rescan folders'),
      db.projects.map((p) => h('button', { class: 'gs-proj', type: 'button', 'aria-current': String(p.slug === cur), onclick: () => { cur = p.slug; main(); } }, p.title, h('small', { style: 'display:block;opacity:.7' }, `${p.images.length} ${p.images.length === 1 ? 'image' : 'images'}`))));
    const p = cur === 'new' ? { slug: '', title: '', images: [], coords: null, brief: [], objectives: [], methodology: [], dataSources: [], software: [], findings: [], stats: [], tags: [], compares: [], order: 100 } : db.projects.find((x) => x.slug === cur);
    root.replaceChildren(h('div', { class: 'gs-admin' }, list, p ? editor(p) : h('p', { class: 'gs-empty' }, 'Choose a project, or create a new one.')));
  }

  const F = (label, name, val, o = {}) => {
    const el = o.area ? h('textarea', { name, placeholder: o.ph || '' }, val ?? '') : h('input', { name, type: o.type || 'text', value: val ?? '', placeholder: o.ph || '', required: o.req, step: o.type === 'number' ? 'any' : null });
    return h('label', { class: o.full ? 'full' : '' }, label, o.hint ? h('small', null, o.hint) : null, el);
  };

  function editor(p) {
    const isNew = cur === 'new';
    const f = h('form', { class: 'gs-form', onsubmit: save },
      h('h2', null, isNew ? 'New project' : p.title),
      h('fieldset', null,
        F('Title', 'title', p.title, { req: true, full: true }),
        isNew ? F('Folder name (slug)', 'slug', '', { hint: 'Optional. Letters, numbers and dashes. Becomes the images folder.' }) : null,
        F('Category', 'category', p.category, { ph: 'Conservation' }), F('Year', 'year', p.year), F('Status', 'status', p.status),
        F('Location', 'location', p.location), F('Latitude', 'lat', p.coords?.lat, { type: 'number', hint: 'Negative = south' }), F('Longitude', 'lng', p.coords?.lng, { type: 'number', hint: 'Negative = west' }),
        F('Role', 'role', p.role), F('Organisation / client', 'client', p.client), F('Duration', 'duration', p.duration), F('Display order', 'order', p.order, { type: 'number', hint: 'Smaller numbers come first' }),
        F('One-line summary (shown on the card)', 'summary', p.summary, { area: true, full: true }),
        F('Overview', 'brief', (p.brief || []).join('\n\n'), { area: true, full: true, hint: 'Separate paragraphs with a blank line' }),
        F('Objectives', 'objectives', (p.objectives || []).join('\n'), { area: true, hint: 'One per line' }),
        F('Method', 'methodology', (p.methodology || []).map((m) => (m.title ? `${m.title} | ${m.text}` : m.text)).join('\n'), { area: true, hint: 'One step per line: Step title | what you did' }),
        F('Data sources', 'dataSources', (p.dataSources || []).join('\n'), { area: true, hint: 'One per line' }),
        F('Software and tools (Legend)', 'software', (p.software || []).join('\n'), { area: true, hint: 'One per line' }),
        F('Field notes (findings)', 'findings', (p.findings || []).join('\n'), { area: true, hint: 'One per line' }),
        F('Key numbers', 'stats', (p.stats || []).map((s) => `${s.value} | ${s.label}`).join('\n'), { area: true, hint: 'value | label, one per line. The first two show on the card.' }),
        F('Tags', 'tags', (p.tags || []).join('\n'), { area: true, hint: 'One per line' }),
        F('Side-by-side sliders', 'compares', (p.compares || []).map((c) => [c.a, c.b, c.title, c.labelA, c.labelB].join(' | ')).join('\n'), { area: true, full: true, hint: 'image id A | image id B | title | left label | right label' }),
        h('label', null, h('span', null, h('input', { type: 'checkbox', name: 'featured', checked: !!p.featured, style: 'width:auto;margin-right:.5rem' }), 'Featured project'))),
      h('div', { class: 'gs-actions' },
        h('button', { class: 'gs-btn', type: 'submit' }, isNew ? 'Create project' : 'Save details'),
        isNew ? null : h('a', { class: 'gs-btn gs-btn--quiet', href: `project.html?p=${p.slug}`, target: '_blank', rel: 'noopener' }, 'View page'),
        isNew ? null : h('button', { class: 'gs-btn gs-btn--danger', type: 'button', onclick: remove }, 'Delete project'),
        h('span', { class: 'gs-status', role: 'status' })),
      isNew ? h('p', { class: 'gs-sub' }, 'Create the project first, then upload its images.') : images(p));

    async function save(e) {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(f));
      const body = { ...d, featured: f.featured.checked, coords: { lat: d.lat, lng: d.lng }, brief: d.brief.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean),
        objectives: lines(d.objectives), methodology: pipe(d.methodology, 1), dataSources: lines(d.dataSources), software: lines(d.software), findings: lines(d.findings), tags: lines(d.tags), stats: pipe(d.stats, 2),
        compares: lines(d.compares).map((l) => { const a = l.split('|').map((s) => s.trim()); return { a: a[0], b: a[1], title: a[2] || '', labelA: a[3] || '', labelB: a[4] || '' }; }) };
      try {
        const saved = isNew ? await call('POST', '/projects', body) : await call('PUT', '/projects/' + p.slug, body);
        db = await call('POST', '/rescan'); cur = saved.slug; main(); say('Saved.', 'ok');
      } catch (err) { say(err.message, 'err'); }
    }
    async function remove() {
      if (!confirm(`Delete “${p.title}”? Its folder moves to public/projects/_trash.`)) return;
      try { await call('DELETE', '/projects/' + p.slug); db = await call('POST', '/rescan'); cur = null; main(); } catch (err) { say(err.message, 'err'); }
    }
    return f;
  }

  /* ---------- images ---------- */
  function images(p) {
    const refresh = async (msg) => { db = await call('POST', '/rescan'); main(); say(msg || 'Saved.', 'ok'); };
    const kindSel = h('select', { name: 'kind', 'aria-label': 'Type for new uploads' }, ['map', 'satellite', 'graph', 'screenshot', 'other'].map((k) => h('option', { value: k }, k)));
    const picker = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true });
    const upload = async (files) => {
      const fd = new FormData(); [...files].forEach((x) => fd.append('images', x)); fd.append('kind', kindSel.value);
      say(`Uploading ${files.length} file(s)…`);
      try { await call('POST', `/projects/${p.slug}/images`, fd); await refresh(`Uploaded ${files.length} image(s).`); } catch (err) { say(err.message, 'err'); }
    };
    picker.addEventListener('change', () => picker.files.length && upload(picker.files));
    const drop = h('div', { class: 'gs-drop', tabindex: 0, role: 'button', onclick: () => picker.click(), onkeydown: (e) => (e.key === 'Enter' || e.key === ' ') && picker.click(),
      ondragover: (e) => { e.preventDefault(); drop.classList.add('is-over'); }, ondragleave: () => drop.classList.remove('is-over'),
      ondrop: (e) => { e.preventDefault(); drop.classList.remove('is-over'); upload(e.dataTransfer.files); } },
      'Drop images here, or select to browse. Originals are stored untouched.');

    const row = (im, i) => {
      const patch = (b) => call('PUT', `/projects/${p.slug}/images/${im.id}`, b).then(() => say('Saved.', 'ok'), (e) => say(e.message, 'err'));
      const rep = h('input', { type: 'file', accept: 'image/*', hidden: true });
      rep.addEventListener('change', async () => { const fd = new FormData(); fd.append('image', rep.files[0]); try { await call('PUT', `/projects/${p.slug}/images/${im.id}/file`, fd); await refresh('Image replaced.'); } catch (e) { say(e.message, 'err'); } });
      const move = async (d) => { const ids = p.images.map((x) => x.id); [ids[i], ids[i + d]] = [ids[i + d], ids[i]]; await call('PUT', `/projects/${p.slug}/images/order`, { order: ids }); refresh('Order saved.'); };
      return h('div', { class: 'gs-imgrow' }, w.GIS.img(im, im.caption),
        h('div', { class: 'gs-fields' },
          h('input', { name: 'caption', value: im.caption || '', placeholder: 'Caption', 'aria-label': 'Caption', onchange: (e) => patch({ caption: e.target.value, alt: e.target.value }) }),
          h('select', { 'aria-label': 'Type', onchange: (e) => patch({ kind: e.target.value }) }, ['map', 'satellite', 'graph', 'screenshot', 'other'].map((k) => h('option', { value: k, selected: k === im.kind }, k))),
          h('p', { class: 'gs-place' }, `${im.file}, id: ${im.id}${im.w ? `, ${im.w}×${im.h}px` : ''}`),
          h('div', { class: 'gs-actions' },
            h('button', { class: 'gs-btn gs-btn--quiet', type: 'button', disabled: p.cover?.id === im.id, onclick: async () => { await patch({ cover: true }); refresh('Cover set.'); } }, p.cover?.id === im.id ? 'Cover image' : 'Make cover'),
            h('button', { class: 'gs-btn gs-btn--quiet', type: 'button', disabled: i === 0, onclick: () => move(-1) }, 'Move up'),
            h('button', { class: 'gs-btn gs-btn--quiet', type: 'button', disabled: i === p.images.length - 1, onclick: () => move(1) }, 'Move down'),
            h('button', { class: 'gs-btn gs-btn--quiet', type: 'button', onclick: () => rep.click() }, 'Replace file'), rep,
            h('button', { class: 'gs-btn gs-btn--danger', type: 'button', onclick: async () => { if (confirm(`Delete ${im.file}?`)) { await call('DELETE', `/projects/${p.slug}/images/${im.id}`); refresh('Image deleted.'); } } }, 'Delete'))));
    };
    return h('section', { class: 'gs-imgs' }, h('h2', null, 'Images'),
      h('p', { class: 'gs-sub' }, `Stored in public/projects/${p.slug}/images/`),
      h('label', null, 'Type for new uploads', kindSel), drop, picker, p.images.map(row));
  }

  // The admin only works with the backend; it needs the images and API under the same origin or CORS_ORIGIN.
  token ? call('POST', '/rescan').then((d) => { db = d; main(); }, () => login()) : login();
})(window);
