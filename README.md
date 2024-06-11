# Reactinity

Reactinity is a small React library designed to simplify your styling process. It includes a variety of SCSS mixins and a custom hooks, making it easier to create responsive and consistent designs.

## Table of contents

- [Reactinity](#reactinity)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Screen info hook](#screen-info-hook)
    - [Set className hook](#set-classname-hook)
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

**An example of what the object contains**
```js
{
	width: 1920,
	height: 1080,
	name: 'DESKTOP'
}
```
**An example how to use it**
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

## Set className hook

**An example how to use it**
```js
import { useClassName } from 'reactinity'

function App() {
	const [setClassName] = useClassName()
	return (
		<div className={setClassName({ 'your-class-name-is-visible' : true, 'your-class-name-is-not-visible' : false }, 'other-classes')}></div>
	)
}
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

**An example of a border (1px solid #000)**
```js
<div className="border-thin-solid-black"></div>
```

**An example of a border-radius (5px)**
```js
<div className="radius-5"></div>
```

### Mixin Colors

Library colors:
* white: `#ffffff`
* black: `#000000`
* red-light: `#FFCCCC`
* red: `#FF0000`
* red-dark: `#990000`
* blue-light: `#CCCCFF`
* blue: `#0000FF`
* blue-dark: `#000099`
* purple-light: `#E0CCFF`
* purple: `#800080`
* purple-dark: `#4B0082`
* yellow-light: `#FFFFCC`
* yellow: `#FFFF00`
* yellow-dark: `#999900`
* gray-light: `#D3D3D3`
* gray: `#808080`
* gray-dark: `#404040`
* orange-light: `#FFE5CC`
* orange: `#FFA500`
* orange-dark: `#CC5200`
* green-light: `#CCFFCC`
* green: `#00FF00`
* green-dark: `#009900`
* cyan-light: `#E0FFFF`
* cyan: `#00FFFF`
* cyan-dark: `#008B8B`
* brown-light: `#D2B48C`
* brown: `#A52A2A`
* brown-dark: `#8B4513`
* teal-light: `#AFEEEE`
* teal: `#008080`
* teal-dark: `#005757`

**An example of a color (brown-light)**
```js
<div className="brown-light"></div>
```

**An example of a background color (brown-light)**
```js
<div className="bg-brown-light"></div>
```

### Mixin Flex

justify-content props
* start
* end
* center
* between
* around
* evenly

align-items props
* start
* end
* center
* stretch
* baseline

wrap props: 
* wrap
* nowrap
* wrap-reverse

direction props: 
* row
* row-reverse
* column
* column-reverse

**An example of a flex**
```js
<div className="flex justify-center align-center wrap row"></div>
```

### Mixin Position

position props:
* static
* relative
* absolute
* sticky
* fixed

**An example of a position (position: absolute, top: 20px, left: 20px)**
```js
<div className="absolute top-20 left-20"></div>
```

### Mixin Spacing

**An example of a margin (margin: 50px)**
```js
<div className="m-50"></div>
```
**An example of a margin (margin-top: 50px, margin-right: 50px, margin-bottom: 50px, margin-left: 50px)**
```js
<div className="mt-50 mr-50 mb-50 ml-50"></div>
```

**An example of a padding (padding: 50px)**
```js
<div className="p-50"></div>
```
**An example of a padding (padding-top: 50px, padding-right: 50px, padding-bottom: 50px, padding-left: 50px)**
```js
<div className="pt-50 pr-50 pb-50 pl-50"></div>
```

**An example of a line height (line-height: 50px)**
```js
<div className="lh-50"></div>
```
### Mixin Text

**An example of a font size (font-size: 24px)**
```js
<div className="font-24"></div>
```

**An example of a font weight (font-weight: 900)**
```js
<div className="weight-900"></div>
```
### Author

**Stefan Todorovic**

* [github.com/stefant989](https://github.com/stefant989)
* [linkedin/stefan-todorovic-st007](https://www.linkedin.com/in/stefan-todorovic-st007/)

### License
Released under the [MIT License](LICENSE).