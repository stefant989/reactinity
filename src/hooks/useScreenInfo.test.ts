import { renderHook } from '@testing-library/react'
import { useScreenInfo } from './useScreenInfo'

describe('useScreenInfo hook', () => {
	test('should render the mocked screen values', () => {
		const { result } = renderHook(useScreenInfo)
		expect(result.current.width).toBe(1920)
		expect(result.current.height).toBe(1080)
		expect(result.current.type).toBe('landscape')
		expect(result.current.isMobile).toBe(false)
		expect(result.current.browserName).toBe('Chrome')
		expect(result.current.browserVersion).toBe('91.0')
	})
})