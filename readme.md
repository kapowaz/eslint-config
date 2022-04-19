# @kapowaz/eslint-config

This packages provides a re-usable ESLint and Prettier config that can be used
for React/TypeScript projects.

## Usage

Add `@kapowaz/eslint-config` as a dev dependency to your project. Note that you
will also need to install all of the peer dependencies directly in your project
as well, to ensure these dependencies are available. See this bug for more info:
https://github.com/eslint/eslint/issues/3458

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

## Publishing a new version

Until CI does this for us, you can manually publish with the yarn script `yarn
ci:publish`; first ensure that the section of the script that emits the `.npmrc`
file is commented out, and that you have publish permissions locally.
