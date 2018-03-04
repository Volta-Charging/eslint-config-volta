# Setup
## Step 1: installing packages
Open up the project you wish to prettify and these packages:
```
yarn add --dev pre-commit
yarn add --dev https://github.com/Volta-Charging/lint-config.git
```

## Step 2: extending eslint rules
Add to your `.eslintrc`:
```javascript
module.exports = {
  extends: [
    'eslint-config-volta/environment/react-native.js', // or whichever env you use
    'eslint-config-volta', // the standard rules
  ],
}
```
## Step 3: running hooks on git commit
Next get precommit hooks setup by adding the following to `package.json`:
```javascript
{
  "devDependencies": {
    "pre-commit": "^1.2.0" // whatever is the latest version
  },
  "scripts": {
    "precommit-msg": "echo 'Pre-commit checks...' && exit 0",
    "lint": "eslint --fix --quiet src",
  },
  "pre-commit": [ "precommit-msg", "lint" ]
}
```

## Step 4: Add in Visual Studio Code settings to repo
TODO: automate this by copying this on package install
```
mv node_modules/eslint-config-volta/.vscode/ .vscode/
```

## Step 5: Make git pretty for pull requests
TODO: automate copying this file on the package install
```
cp node_modules/eslint-config-volta/.editorconfig .
```

