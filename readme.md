# @kapowaz/eslint-config

This packages provides a re-usable ESLint and Prettier config that can be used
for React/TypeScript projects.

## Usage

Create a file called `.eslintrc.json` in the root of your project, containing
the following:

```json
{
  "extends": ["@kapowaz/eslint-config"]
}
```

You will still need to provide a `.prettierrc` config file to override the
default prettier settings, e.g.

```json
{
  "printWidth": 120,
  "singleQuote": true
}
```
