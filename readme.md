# babel-plugin-display-name

[![Build Status](https://travis-ci.org/akameco/babel-plugin-display-name.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-display-name)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> add displayName

## Install

```
$ yarn add --dev babel-plugin-display-name
```

## Usage

.babelrc

```js
{
  "plugins": ["display-name"]
}
```

## Examples

### Before

```js
class Display extends React.Component {
  // @displayName
  static On = () => <div>On</div>
  render() {
    return <div>{this.props.children}</div>
  }
}
```

### After

```diff
class Display extends React.Component {
  // @displayName
  static On = () => <div>On</div>;
  render() {
    return <div>{this.props.children}</div>;
  }
}

+Display.On.displayName = "Display.On";
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-plugin-display-name/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-plugin-display-name/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-plugin-display-name/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
