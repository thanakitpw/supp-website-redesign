# Reference — extracted from the approved design prototype

Captured from `https://supp-life-goals.hamakasit.chatgpt.site/` (behind a ChatGPT
login, so it cannot be re-fetched with curl).

- `design-source.css` — the prototype's hand-written stylesheet, unminified.
  `app/globals.css` is this file expanded 1:1, plus a small block of base rules
  the prototype inherited from Tailwind preflight (list reset, form-control
  border and line-height, `.sr-only`, the outline copy button, the select chevron).
- `html/*.html` — the prototype's server-rendered markup per page.

Use these to re-verify fidelity after any change: the rebuilt site was checked by
measuring every element's bounding box on both sites at a 1920px viewport and
diffing them (0 differences > 2px, identical page heights on all six pages).
