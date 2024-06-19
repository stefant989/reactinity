import { ScreenInfo } from '../types'
import { BROWSER } from './constants'
import {
	chromeRegex,
	chromeVersion,
	edgeRegex,
	edgeVersion,
	firefoxRegex,
	firefoxVersion,
	intExpRegex,
	intExpVersion,
	isMobileRegex,
	operaRegex,
	operaVersion,
	safariRegex,
	safariVersion
} from './regex'

export const getScreenInfo = (): ScreenInfo => {
	const width: number = window.innerWidth
	const height: number = window.innerHeight
	const type: string = window.screen.orientation.type.replace('-primary', '')
	const userAgent: string = navigator.userAgent
	let browserName: string = ''
	let browserVersion: string = ''

	const isMobile: boolean = isMobileRegex.test(userAgent)

	const getVersion = (regex: RegExp): string => {
		const match = userAgent.match(regex)
		return match ? match[1] : 'Unknown'
	}

	if (edgeRegex.test(userAgent)) {
		browserName = BROWSER.EDGE
		browserVersion = getVersion(edgeVersion)
	} else if (operaRegex.test(userAgent)) {
		browserName = BROWSER.OPERA
		browserVersion = getVersion(operaVersion)
	} else if (safariRegex.test(userAgent) && !chromeRegex.test(userAgent)) {
		browserName = BROWSER.SAFARI
		browserVersion = getVersion(safariVersion)
	} else if (chromeRegex.test(userAgent)) {
		browserName = BROWSER.CHROME
		browserVersion = getVersion(chromeVersion)
	} else if (firefoxRegex.test(userAgent)) {
		browserName = BROWSER.FIREFOX
		browserVersion = getVersion(firefoxVersion)
	} else if (intExpRegex.test(userAgent)) {
		browserName = BROWSER.INT_EXP
		browserVersion = getVersion(intExpVersion)
	}

	return {
		width,
		height,
		type,
		isMobile,
		browserName,
		browserVersion
	}
}