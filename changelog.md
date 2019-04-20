# Changelog

This is a list of all changes mades to `@kapowaz/eslint-config`. Versions
should be in chronological order (latest version at the top).

### v1.1.0

- Disable `import/prefer-default-export` because lots of projects have already
  disabled it.
- Add `"accum"` and `"memo"` to `no-param-reassign` ignored names.

### v1.0.0

- Add `eslint-plugin-react-hooks` to lint code when React Hooks start to be
  used. This is a breaking change because there is a dependency on a new plugin,
  which will have to be installed in projects using this config when upgrading
  to this version. This is because of how ESLint works when loading plugins.
  When upgrading to this version the `eslint-plugin-react-hooks` will need to be
  installed. This can be done using the `npm i -D eslint-plugin-react-hooks`
  command.

### v0.8.3

- This release introduces no changes and is being used to test slack
  notifications after a succesful NPM publish.

### v0.8.2

- This release introduces no changes and is being used to test some changes to
  the automated release workflow.

### v0.8.1

- This release introduces no changes and is being used to test some changes to
  the automated release workflow.

### v0.8.0

- Changed the `jsx-a11y/label-has-associated-control` rule to allow labels to
  reference an input using the `htmlFor` attribute and not force the label to
  also wrap the input.

### v0.7.0

- Remove the `jsx-a11y/label-has-for` rule since it is deprecated and not
  mantained.

### v0.6.0

- Simplify the rules for `react/sort-comp`, which was tricky to apply
  consistently in real repos

### v0.5.0

- Change the `prettier/prettier` ESLint rule to _not_ include a specific config.
  Doing so can cause conflicts between different editor plugins since they look
  for the prettier config in different places (`.eslintrc` vs `.prettierrc`).
- Change the `trailingComma` Prettier option to 'all'.
- Change the `import/order` ESLint rule to allow and encourage CSS Module
  stylesheet imports to come last.

### v0.4.0

- Disable the `no-plusplus` ESLint rule.

### v0.3.0

- Disable the `class-methods-use-this` ESLint rule.
- Ignore stateless components in the `react/no-multi-comp` rule.

### v0.2.0

- Modified ESLint and Prettier rules to reflect common rules and exceptions.

### v0.1.0

- Added all of AirBnBs rules unmodified as a staring point for our own
  configuration.

### v0.0.3

- Publish our `prettier.config.js` so that other consumers of this package can
  use it.

### v0.0.2

- Moved all dependencies to be peerDependencies [as recommended by
  ESLint](https://github.com/eslint/eslint/issues/3458).
- Added prettier ESLint config and plugin to enforce its usage. Also, added a
  `prettier.config.js` that consumers of this package can use to configure
  prettier.

### v0.0.1

- Initial release.
