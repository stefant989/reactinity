import { getScreenInfo } from './helpers'
import { BROWSER } from './constants'

describe('Helpers functions', () => {
	test('should return correct screen info for Chrome', () => {
		const expected = {
			width: 1920,
			height: 1080,
			type: 'landscape',
			isMobile: false,
			browserName: BROWSER.CHROME,
			browserVersion: '91.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})
	test('should return correct screen info for Firefox', () => {
		Object.defineProperty(window.navigator, 'userAgent', {
			writable: true,
			value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
		})
		const expected = {
			width: 1920,
			height: 1080,
			type: 'landscape',
			isMobile: false,
			browserName: BROWSER.FIREFOX,
			browserVersion: '89.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})
	test('should return correct screen info for Safari', () => {
		Object.defineProperty(window.navigator, 'userAgent', {
			writable: true,
			value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
		})
		const expected = {
			width: 1920,
			height: 1080,
			type: 'landscape',
			isMobile: false,
			browserName: BROWSER.SAFARI,
			browserVersion: '14.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})
	test('should return correct screen info for Edge', () => {
		Object.defineProperty(window.navigator, 'userAgent', {
			writable: true,
			value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'
		})
		const expected = {
			width: 1920,
			height: 1080,
			type: 'landscape',
			isMobile: false,
			browserName: BROWSER.EDGE,
			browserVersion: '126.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})

	test('should return correct screen info for Opera', () => {
		Object.defineProperty(window.navigator, 'userAgent', {
			writable: true,
			value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 OPR/77.0.4054.172'
		})
		const expected = {
			width: 1920,
			height: 1080,
			type: 'landscape',
			isMobile: false,
			browserName: BROWSER.OPERA,
			browserVersion: '77.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})

	test('should return correct screen info for Internet Explorer', () => {
		Object.defineProperty(window.navigator, 'userAgent', {
			writable: true,
			value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)'
		})
		const expected = {
			width: 1920,
			height: 1080,
			type: 'landscape',
			isMobile: false,
			browserName: BROWSER.INT_EXP,
			browserVersion: '10.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})
	test('should return correct screen info for Iphone', () => {
		Object.defineProperty(window.navigator, 'userAgent', {
			writable: true,
			value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1'
		})
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			value: 375
		})
		Object.defineProperty(window, 'innerHeight', {
			writable: true,
			value: 812
		})
		const expected = {
			width: 375,
			height: 812,
			type: 'landscape',
			isMobile: true,
			browserName: BROWSER.SAFARI,
			browserVersion: '14.0'
		}

		const screenInfo = getScreenInfo()
		expect(screenInfo).toEqual(expected)
	})

})