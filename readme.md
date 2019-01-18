# CSS Custom Properties Loader for Webpack<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Dependencies][deps-img]][deps]

[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/css-custom-props-loader
[npm]: https://www.npmjs.com/package/css-custom-props-loader
[sponsor-img]: https://badgen.net/badge/Sponsored%20by/Sebastian%20Software/692446
[deps-img]: https://badgen.net/david/dep/sebastian-software/css-custom-props-loader
[npm-downloads-img]: https://badgen.net/npm/dm/css-custom-props-loader
[npm-version-img]: https://badgen.net/npm/v/css-custom-props-loader

Loader to get CSS custom properties from CSS files.

See [MDN custom CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*): MDN

```bash
$ npm install --save-dev css-custom-props-loader
```

## Usage

[Documentation: Using loaders](https://webpack.js.org/concepts/loaders/#inline)

In your source code:

```js
import cssProps from "!css-custom-props!./props.css";
```

with having css file `props.css`:

```css
:root {
  --prop1: red;
  --prop2: 12px;
  --another-prop: blue;
}
```

You can access the property values via `cssProps.prop1` or `cssProps.anotherProp`.

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2019<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
