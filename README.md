# Pact Styles
A simple Bower package to decentralise our styles. This will install the CSS and font files you need to get started making Pact apps/pages.

## Usage
### Ember (with ember-cli)

#### Including CSS

In your ember-cli project’s folder run: 
`bower install pact-styles --save`

In `Brocfile.js` add the following just above `module.exports = app.toTree();`:
```javascript
app.import('bower_components/pact-styles/public/css/pact.css');
```

Start/restart the Ember server; e.g. `ember-server`

The CSS will be added to `/dist/assets/vendor.css` automatically

If you used ember-cli to set up the app, `vendor.css` is included automatically

#### Including the fonts
Including fonts requires the broccoli-static-compiler:
`npm install --save broccoli-static-compiler`

Add this import to the top of `Brocfile.js`, just below the `EmberApp` require:
```javascript
var pickFiles = require('broccoli-static-compiler');
```

Add the followinf to `Brocfile.js`, just above the `module.exports = app.toTree()` line:
```javascript
var fontAssets = pickFiles('bower_components/pact-styles', {
  srcDir: '/public/fonts/',
  files: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.svg'],
  destDir: '/assets/fonts'
});
```

Change `module.exports = app.toTree()` to `module.exports = app.toTree(fontAssets)`

Start/restart the Ember server; e.g. `ember-server`.

The fonts will be added to `/assets/fonts/` in the `dist` directory.

##### Note on fonts:
The stylesheet expects fonts to be in `./fonts`, relative to the generated CSS file, so if you’re including the CSS in a different directory, make sure fontas are imported to `fonts/` in the same directory as the CSS file.