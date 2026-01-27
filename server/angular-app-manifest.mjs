
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/HuvashenCV/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/HuvashenCV"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6471, hash: 'eabd683fa7277701ae224408b754413d1af80ca3a50cfb8664e34eb825737e6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: 'a86ce384d05e9ff107dc34611c1dacd0eda969dea7eb7376dc0dda7dd442579b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81498, hash: 'e5bfa60b4d478b2e19a90bbf5fe235f7c9141e17c66ccfd47197713b71760426', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PG47RNLQ.css': {size: 23098, hash: 'rSZ7burBl3I', text: () => import('./assets-chunks/styles-PG47RNLQ_css.mjs').then(m => m.default)}
  },
};
