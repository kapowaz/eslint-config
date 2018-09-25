const assert = require('assert');
const pkg = require('../package.json');

// ESLint is quite weird in the sense that it loads
// plugins relative to where your eslint config is installed.
//
// Since we want eslint to be a peerDependency (so that your
// editors can use the local version of it to lint in your editor)
// we have to also specify all of our other plugins etc.
// as peer dependencies.
//
// When linting this repo itself, we want to ensure we use
// the same dependencies we specify as peersDeps. To ensure this
// is always the case, this test checks whether the peer and dev
// dependencies are IDENTICAL. This means that linting 'passing'
// on this package in CI guarantees that it will also work when
// published and used in a project trying to use this config.
//
// More information on this issue: https://github.com/eslint/eslint/issues/3458
//

const peerDependencies = Object.keys(pkg.peerDependencies)
  .sort()
  .map((k) => `${k}@${pkg.peerDependencies[k]}`)
  .join(', ');

const devDependencies = Object.keys(pkg.devDependencies)
  .sort()
  .map((k) => `${k}@${pkg.devDependencies[k]}`)
  .join(', ');

assert(
  peerDependencies === devDependencies,
  `devDependencies and peerDependencies don't match. \nPeer dependencies: ${peerDependencies}. \nDev dependencies: ${devDependencies}.`,
);
