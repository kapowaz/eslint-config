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

To release a new version, create a tag corresponding to the new version and
update package.json with the version string, then create a new release via the
GitHub Releases page for the repository. GitHub Actions will take care of the
rest.

## Setting up commitlint

1. `yarn add husky -D`
2. `yarn husky install`
3. `npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'`
4. Add `"prepare": "husky install"` to `"scripts"` key in `package.json`. If the
   package is published from a `dist` directory, this should be `"prepare": "cd .. && husky install"`
5. Copy `commitlint.config.js` to root of project

## Notes on getting Husky working in Git Tower

See [this guide][1] for details on how to configure Git Tower to avoid this
error message when attempting to commit:

```
.husky/commit-msg: line 4: npx: command not found
husky - commit-msg hook exited with code 127 (error)
husky - command not found in PATH=/Applications/Xcode.app/Contents/Developer/usr/libexec/git-core:/Applications/Tower.app/Contents/Resources/git-flow:/Applications/Tower.app/Contents/Resources/git-lfs:/usr/bin:/bin:/usr/sbin:/sbin
```

Create `~/Library/Application\ Support/com.fournova.Tower3/environment.plist`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<dict>
		<key>PATH</key>
		<string>/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin:/Users/bdarlow/.nvm/versions/node/v14.18.1/bin:/Users/bdarlow/.nvm/versions/node/v18.13.0</string>
	</dict>
</plist>
```

Note that the tags for `key` and `string` mustn’t have any whitespace (so
disable Prettier before saving).

[1]: https://www.git-tower.com/blog/git-hooks-husky/

## Notes on semantic-release

This project is relatively simple so can be used as the foundation for adding
semantic-release to another project. The important steps are as follows:

1. `yarn add -D semantic-release` to add semantic-release to the project root.
   Important: this step should be skipped if the project uses Node v17 or lower,
   since semantic-release relies on Node 18.
2. Install `semantic-release-cli` globally: `yarn global add semantic-release-cli`
3. Run `semantic-release-cli setup` to begin the setup process
4. Follow the instructions to login to npmjs.com, and provide Github and Circle
   CI auth tokens.
5. Choose 'yes' to add Circle CI `config.yml` file; you can use the config in
   this project as a template.
6. Copy .releaserc.json, adding any other static build artifacts that should be
   committed to git as a result of the release process to the `"assets"` key of
   the `"@semantic-release/git"` plugin.
7. Note that the initial release will be based on the version tag, which starts
   at v1.0.0; if the project already has a released package with a higher
   version, ensure to tag with that version first, with `git tag
   v<latest-version-published> && git push --tags origin`
