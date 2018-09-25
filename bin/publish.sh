set -e

echo "Starting NPM publish"

echo "- Setting up auth token for npm"
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN_CI" >> .npmrc
echo "scope=@deliveroo" >> .npmrc

echo "- Comparing local package.json version with version in registry"
LATEST=$(npm show @deliveroo/eslint-config@$DIST_TAG version)
CURRENT=$(node -e 'console.log(require("./package.json").version)')

if [ "$CURRENT" != "$LATEST" ]
then
  echo "- Detected a version mismatch."
  echo "- Publishing to MPM"
  npm publish && \
  git tag "eslint-config-v${CURRENT}" && \
  git push origin "eslint-config-v${CURRENT}" && \
  ../../bin/post-publish-slack-message.sh $PACKAGE $CURRENT
else
  echo "- No version mismatch, nothing to publish"
fi
