# Reactinity

Reactinity is a compact React library designed to simplify your styling process. It includes a variety of SCSS mixins and a custom hook for obtaining screen information, making it easier to create responsive and consistent designs.

## Table of contents

- [Reactinity](#reactinity)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Screen info hook](#screen-info-hook)
    - [Mixin borders](#mixin-borders)
    - [Mixin colors](#mixin-colors)
    - [Mixin flex](#mixin-flex)
    - [Mixin position](#mixin-position)
    - [Mixin spacing](#mixin-spacing)
    - [Mixin text](#mixin-text)
  - [Author](#author)
  - [License](#license)

## Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install reactinity
```

## Usage

Import the index.css library file into your main index.js or index.css

```js
import 'reactinity/dist/index.css'
```

### Screen info hook

This hook will return an object 
```js
{
	width: 1920,
	height: 1080,
	name: 'DESKTOP'
}
```
```js
import { useScreenSize } from 'reactinity'

function App() {
	const screen = useScreenSize()
	return (
		<>
			<div>{screen.width}</div>
			<div>{screen.height}</div>
			<div>{screen.name}</div>
		</>
	)
}

export default App
```

### Mixin Borders

border widths:
* thin: 1px
* medium: 2px
* thick: 3px

border styles:
* solid
* dashed
* dotted

border colors: check in the color section bellow

**Usage of border (1px solid #000)**
```js
<div className="border-thin-solid-black"></div>
```

**Usage of border-radius (5px)**
```js
<div className="radius-5"></div>
```

### Mixin Colors

### Mixin Flex

### Mixin Position

### Mixin Spacing

### Mixin Text

### Author

**Stefan Todorovic**

* [github.com/stefant989](https://github.com/stefant989)
* [linkedin/stefan-todorovic-st007](https://www.linkedin.com/in/stefan-todorovic-st007/)

### License
Released under the [MIT License](LICENSE).