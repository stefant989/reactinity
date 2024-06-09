interface Map {
	LANDSCAPE: number,
	MOBILE_MIN: number,
	MOBILE_MAX: number,
	TABLET_MIN: number,
	TABLET_MAX: number,
	LAPTOP_MIN: number,
	LAPTOP_MAX: number,
	DESKTOP_MIN: number,
	DESKTOP_MAX: number,
	TV: number
}

export const screenSizeMap: Map = {
	LANDSCAPE: 576,
	MOBILE_MIN: 320,
	MOBILE_MAX: 767,
	TABLET_MIN: 768,
	TABLET_MAX: 1024,
	LAPTOP_MIN: 1025,
	LAPTOP_MAX: 1440,
	DESKTOP_MIN: 1441,
	DESKTOP_MAX: 1920,
	TV: 1921
}