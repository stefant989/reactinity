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
    - [Mixin grid](#mixin-grid)
    - [Mixin position](#mixin-position)
    - [Mixin spacing](#mixin-spacing)
    - [Mixin text](#mixin-text)
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

```js
import { useScreenInfo } from 'reactinity'

function App() {
	const screen = useScreenInfo()
	return (
		<>
			<div>{screen.width}</div>
			<div>{screen.height}</div>
			<div>{screen.type}</div>
			<div>{screen.isMobile ? 'Mobile' : 'Desktop'}</div>
			<div>{screen.browserName}</div>
			<div>{screen.browserVersion}</div>
		</>
	)
}

export default App
```
**An example of what the object contains**
```js
{
	width: 1920,
	height: 1080,
	type: 'landscape'
	isMobile: false,
	browserName: 'Chrome',
	browserVersion: 125.0

}
```

### Set className hook

```js
import { useClassName } from 'reactinity'

function App() {
	const [setClassName] = useClassName()
	return (
		<div className={setClassName({ 'class-isActive' : isActive }, 'class-one class-two')}></div>
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

### Mixin Grid

* Columns: 12
* Column classes: xSmall, small, mid, large, xLarge

**An example of a grid**
```js
<div className="grid">
	<div className="grid-row">
		<div className='xSmall-12 small-6 mid-4 large-2'>Column 1</div>
		<div className='xSmall-12 small-6 mid-4 large-2'>Column 2</div>
		<div className='xSmall-12 small-6 mid-4 large-2'>Column 3</div>
		<div className='xSmall-12 small-6 mid-4 large-2'>Column 4</div>
		<div className='xSmall-12 small-6 mid-4 large-2'>Column 5</div>
		<div className='xSmall-12 small-6 mid-4 large-2'>Column 6</div>
	</div>
</div>
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

### License
Released under the [MIT License](LICENSE).