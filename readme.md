# @kapowaz/eslint-config — moved

> **This repository is archived and no longer maintained.**
> `@kapowaz/eslint-config` now lives in the
> [**kapowaz/design-system**](https://github.com/kapowaz/design-system) monorepo,
> under [`packages/eslint-config`](https://github.com/kapowaz/design-system/tree/main/packages/eslint-config).

All development and releases continue there. Versions **7.0.0 and later** are
published from the monorepo via Changesets + npm OIDC trusted publishing. The
`master` branch in this repository corresponds to the legacy v6 line and will
not receive further updates.

- **Source:** https://github.com/kapowaz/design-system/tree/main/packages/eslint-config
- **npm:** https://www.npmjs.com/package/@kapowaz/eslint-config

## Usage (v7+)

v7 is a flat-config rewrite (ESLint ≥ 10) and is **not** backwards-compatible
with the v6 config in this repository.

```bash
pnpm add -D @kapowaz/eslint-config eslint prettier
```

```js
// eslint.config.mjs
import base from '@kapowaz/eslint-config';

export default base; // compose with `@kapowaz/eslint-config/react` for React apps
```

```jsonc
// package.json
"prettier": "@kapowaz/eslint-config/prettier"
```

See the [package README](https://github.com/kapowaz/design-system/tree/main/packages/eslint-config#readme)
for full usage, including the React layer and Prettier setup.
