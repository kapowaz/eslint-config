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
disable Prettier beforfe saving).

[1]: https://www.git-tower.com/blog/git-hooks-husky/
