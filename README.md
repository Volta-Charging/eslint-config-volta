# Setup
## Step 1: installing packages
First add some packages to get precommit hooks working
```
yarn add --dev pre-commit # TODO: this should be auto installed with this repo?

# TODO: add this to npm
yarn add --dev https://github.com/Volta-Charging/lint-config.git
```

## Step 2: extending eslint rules
Add to your `.eslintrc`:
```
module.exports = {
  extends: [
    'eslint-config-volta/environment/react-native.js', # whatever env you use
    'eslint-config-volta', # the standard rules
  ],
}
```
## Step 3: running hooks on git commit
Next get precommit hooks setup by adding the following to `package.json`:
```
{
  "devDependencies": {
    "pre-commit": "^1.2.0" # whatever is the latest version
  },
  "scripts": {
    "lint": "eslint src --fix",
    "precommit-msg": "echo 'Pre-commit checks...' && exit 0"
  },
  "pre-commit": [ "precommit-msg", "lint" ]
}
```

## Step 4: Add in Visual Studio Code settings to repo
TODO: automate this better by doing this on a yarn install
```
mv node_modules/lint-config/.vscode/ .vscode/
```
