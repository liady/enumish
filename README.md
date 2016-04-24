Enumish
===========

[![Version](http://img.shields.io/npm/v/enumish.svg)](https://www.npmjs.org/package/enumish)
[![Build Status](https://travis-ci.org/liady/enumish.svg?branch=master)](https://travis-ci.org/liady/enumish)

> Easily create Enum-like objects.

## Installation
```sh
npm install enumish --save
```

## Usage
### Basic
Import the library and invoke it with a list of strings (for mirrored values):
```js
import enums from 'enumify';

// basic usage
const Directions = enums('TOP', 'LEFT', 'RIGHT', 'BOTTOM', 'CENTER');
// result
Directions.TOP === 'TOP'; // true
```
### Custom values
Some of the arguments can be objects, for custom values:
```js
// custom values
const SideBarComponents = enums('ICON_PICKER', {
    LAYOUT_SELECTOR:    'LayoutSelector',
    COLOR_PICKER:       'ColorPickerSection'
});
// result
SideBarComponents.ICON_PICKER === 'ICON_PICKER'; // true
SideBarComponents.LAYOUT_SELECTOR === 'LayoutSelector'; // true
```
### Converter function
You can supply the keys as an array, and a converter function for the second argument:
```js
// custom converter function as the second argument
const Icons = enums(['BOLD', 'ITALIC'], val => val.toLowerCase());
// result
Icons.BOLD === 'bold'; // true
```
Further usage can be found in the [tests](https://github.com/liady/enumish/blob/master/test/spec.js).

## Test
```sh
npm run test
```

## Configuration
Built using [Lib Starter Light](https://github.com/liady/es6-lib-starter-light).

## License
MIT
