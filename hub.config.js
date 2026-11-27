/* 2human admin hub (the hub of hubs): the thin config (hub-chassis 1.2.0). Identity, tokens, labels, file lists, storage
 * prefix. Navigation and words: data/core.js. Figures: data/fleet.js and data/accounts.js, built by tools/hub/build-data.mjs
 * from fleet/snapshot.json and the registry. Layout: views.js. Accent: the 2human teal from the 2h-stack brand tokens. */
window.HUB_CONFIG = {
  id: '2human-admin',
  title: '2human admin',
  lang: 'en',
  locale: 'en-GB',
  currency: 'EUR',
  home: '/overview',
  theme: 'auto',
  brand: { name: '2human', sub: 'Admin · hub of hubs' },
  tokens: { accent: '#197a69', accentSoft: '#e3f1ee' },
  tokensDark: { accent: '#34b29a', accentSoft: '#173a33' },
  storage: { prefix: '2human-admin-hub' },
  modules: ['tables', 'evidence', 'page-frame'],   // page-frame: Website › Live site
  /* the one ordered file list: locally these load as files; on the mirror gate.js runs them from data/bundle.enc */
  data: ['data/core.js?v=4261bdd1ae', 'data/fleet.js?v=5827ecb0a8', 'data/library-map.js?v=08ea1aa5ae', 'data/ops.js?v=9e646a4392', 'data/website.js?v=da3214cc7a', 'data/website-words.js?v=1a1d344e71'],   // website.js: tools/website/build-hub-data.mjs
  dataOptional: ['data/accounts.js?v=1e88f67b67'],
  views: ['views.js?v=73d0502475', 'actions.js?v=433ad33c83', 'map-views.js?v=8aaf68cb22', 'invoice-doc.js?v=ae81e4326c', 'ops.js?v=413533e956', 'website.js?v=d97aadd890'],
  labels: {
    /* the sign-in gate (gate.js): the only words a signed-out visitor sees, so they live here, not in the bundle */
    gateTitle: '2human admin',
    gatePrompt: 'Sign in with your 2human email. We send you a one-time link; open it in this browser and the hub opens.',
    gateEmail: 'Your work email', gateSend: 'Email me a sign-in link', gateSending: 'Sending…',
    gateSent: 'Check your inbox for a sign-in link (from Firebase; look in spam if it does not arrive) and open it in this browser.',
    gateNotListed: 'That address is not on the account list.', gateSendFailed: 'The link could not be sent. Try again.',
    gateLinkFailed: 'That sign-in link did not work. It may have expired or been used already. Ask for a new one below.',
    gateNoAccess: 'Signed in as {email}, but this account has no access to the admin hub. Sign out and use your 2human account.',
    gateOpenFailed: 'The hub could not be opened. Reload the page to try again.', gateUnavailable: 'The hub is not available right now.',
    gateSignOut: 'Sign out', signInConfirmEmail: 'Confirm your email address to finish signing in',
    filter: 'Filter the menu'
  }
};
