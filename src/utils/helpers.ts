import { screenSizeMap } from './constants'

type Info = {
	width: number,
	height: number,
	name: string
}

export const getScreenInfo = (): Info => {
	const width: number = window.innerWidth
	const height: number = window.innerHeight
	const screenType: string = window.screen.orientation.type
	let screen: string = ''

	if (width >= screenSizeMap.MOBILE_MIN && width <= screenSizeMap.MOBILE_MAX) {
		screen = 'MOBILE'
	} else if (height <= screenSizeMap.LANDSCAPE && screenType.includes('landscape')) {
		screen = 'LANDSCAPE'
	} else if (width >= screenSizeMap.TABLET_MIN && width <= screenSizeMap.TABLET_MAX) {
		screen = 'TABLET'
	} else if (width >= screenSizeMap.LAPTOP_MIN && width <= screenSizeMap.LAPTOP_MAX) {
		screen = 'LAPTOP'
	} else if (width >= screenSizeMap.DESKTOP_MIN && width <= screenSizeMap.DESKTOP_MAX) {
		screen = 'DESKTOP'
	} else if (width >= screenSizeMap.TV) {
		screen = 'TV'
	}

	return {
		width,
		height,
		name: screen
	}
}