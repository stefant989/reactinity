import '@testing-library/jest-dom'

if (typeof window !== 'undefined') {
	Object.defineProperty(window, 'screen', {
		writable: true,
		value: {}
	})
	Object.defineProperty(window, 'navigator', {
		writable: true,
		value: {}
	})
	Object.defineProperty(window, 'innerWidth', {
		writable: true,
		value: 1920
	})

	Object.defineProperty(window, 'innerHeight', {
		writable: true,
		value: 1080
	})

	Object.defineProperty(window, 'screen', {
		writable: true,
		value: {}
	})

	Object.defineProperty(window.screen, 'orientation', {
		writable: true,
		value: {}
	})

	Object.defineProperty(window.screen.orientation, 'type', {
		writable: true,
		value: 'landscape-primary'
	})

	Object.defineProperty(window.navigator, 'userAgent', {
		writable: true,
		value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
	})
}