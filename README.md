# Setup
1. Installing Packages
Open up the project you wish to prettify and these packages:
```
yarn add --dev lint-staged husky
yarn add --dev @volta/eslint-config-volta
```

1. Extending eslint Rules
Modify your `.eslintrc`:
```javascript
module.exports = {
  extends: 'eslint-config-volta/environment/react-native', // or whichever env you use
}
```

1. Running Hooks on Git Commit
Add precommit hooks to `package.json`:
```javascript
{
  "scripts": {
    "precommit": "lint-staged",
    "lint": "eslint --fix src"
  },
  "lint-staged": {
    "*.js": [
      "yarn lint",
      "git add"
    ]
  }
}
```

# Testing New Linting Rules
How do I know that the new eslint-config-volta will work good? Glad you asked partner! With our handy dandy `yarn link` testing's a doozy. Let me show yall:
1. Run the following under your local version of `eslint-config-volta` with the branch you want to test:
```sh
cd ./eslint-config-volta
yarn link
```
1. Next go to the repository you wish to test and run the following:
```sh
cd ../mobile # or whichever library you're testing
yarn link "@volta/eslint-config-volta"
```
More details can be found here: https://yarnpkg.com/lang/en/docs/cli/link/

# Publishing to NPM
> Run this command from the branch you want to make changes to
```
yarn publish
```

# TODO (things we havent setup yet but want to do)
1. Add in Visual Studio Code settings to repo
TODO: automate this by copying this on package install
```
mv node_modules/eslint-config-volta/.vscode/ .vscode/
```

1. Make git pretty for pull requests
TODO: automate copying this file on the package install
```
cp node_modules/eslint-config-volta/.editorconfig .
```