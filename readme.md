# eslint-config

This packages provides a re-usable [ESLint][1] and [Prettier][2] config that can
be used for JavaScript projects.

## Background and motivation:

Linting rules can broadly be categorised into two camps:

1. Rules that are stylistic and enforce a consistent formatting (semicolons,
   tabs or spaces, quotes etc.)
2. Rules that attempt to prevent bugs (No undefined variables, unreachable code
   etc.)

The former group an be a source of great bike-shedding and is often not very
impactful in terms of time spent discussing it vs. any potential benefits.

The latter instead can help ship more solid and resilient applications with
fewer bugs.

For this reason this set of linting rules enforces the use of [Prettier][2] to
completely take any stylistic discussions off the table and re-direct people's
focus to the architecture and logic of code in pull request reviews.

Additionally - the use of a formatter means:

- That pull request diffs only show logic/code changes and not formatting
  changes a given author made due to personal taste.
- That authoring code is quicker since you don't have to spend time indenting,
  outdenting, adding commas, indenting again, adding spaces etc.
- That new-comers to Javascript can focus on learning the language vs. what is
  the common way to format code.

Since we can rely on Prettier to take care of formatting the remaining rules in
this ESLint config focus on preventing bugs, making our UI accessible and
avoiding common mistakes (such as having duplicate keys in an object or
mispelling React life-cycle methods).

## Installation

Since this is a private npm package you'll have to first add a file in the root
of your project called `.npmrc` with the following line in it.

```
//registry.npmjs.org/:_authToken=$TOKEN_HERE
```

To install this package run this in your terminal:

```
(
  export PKG=@kapowaz/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

This will install the `@kapowaz/eslint-config` package and all it's peer
depenedencies.

Now we'll need to configure our project to use our config. To do this, add a
`.eslintrc.js` in your project's root with this:

```js
module.exports = {
  extends: '@kapowaz/eslint-config',
};
```

Next we'll have to configure Prettier. To do this, add a a file in your
project's root called 'prettier.config.js' with the following:

```js
module.exports = require('@kapowaz/eslint-config/prettier.config.js');
```

Next, add the following command to your npm scripts in your `package.json`:

```diff
  "scripts": {
+    "lint": "eslint '**/*.js'",
  },
```

You are now set-up. You can run `npm run lint` to lint your project and `npm run
lint -- --fix` to auto-fix all issues that are needed and run Prettier over all
of your code.

:vertical_traffic_light: You should run `npm run lint` in CI as a required step
on every pull request and release. It is recommended to lint before your tests
since linting is generally quicker and failing early offers a nicer develoment
experience.

## Setting up your editor

The recommended setup is to have ESLint running in your editor so you
immediatiately see issues while writting code. Additionally it's recommended to
have ESLint auto-fix any issues it can every time you save a file.

This isn't a requirement for you to work on any front-end code but is **highly**
recommended to have a nice development experience when writting Javascript.

This is how you setup your editor for the optimal experience. If you editor is
not listed, please contribute a how-to!

- **Atom** – Install the [linter-eslint](https://atom.io/packages/linter-eslint)
  package. Go to the package's settings and enable the setting "Format Files on
  Save".

- **Sublime** – Install the
  [ESLintFormatter](https://github.com/TheSavior/ESLint-Formatter) package and
  add `"format_on_save": true,` to your settings. Then install
  [SublimeLinter](http://www.sublimelinter.com/en/stable/) and
  [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint).

- **VSCode** – Install the
  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  package and enable the `eslint.autoFixOnSave` rule in your settings.

[1]: https://eslint.org/
[2]: https://prettier.io/
