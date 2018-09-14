# Setup
## Step 1: installing packages
Open up the project you wish to prettify and these packages:
```
yarn add --dev lint-staged husky eslint
yarn add --dev @volta/eslint-config-volta
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

# Publishing to NPM
> Run this command from the master branch when there are new updates. 

```
yarn publish
```

