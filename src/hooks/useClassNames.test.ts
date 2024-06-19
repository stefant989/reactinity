import { renderHook } from '@testing-library/react'
import { useClassNames } from './useClassNames'

describe('useClassNames hook', () => {
	test('should return a function to set classNames', () => {
		const { result } = renderHook(useClassNames)

		const [setClassNames] = result.current

		expect(typeof setClassNames).toBe('function')
	})

	test('should return correct classNames based on conditions', () => {
		const { result } = renderHook(useClassNames)

		const [setClassNames] = result.current

		const classNames = setClassNames({ 'active': true, 'hidden': false }, 'container')

		expect(classNames).toBe('active container')
	})

	test('should return empty classNames', () => {
		const { result } = renderHook(useClassNames)

		const [setClassNames] = result.current

		const classNames = setClassNames({}, '')

		expect(classNames).toBe('')
	})

	test('should handle only conditions', () => {
		const { result } = renderHook(useClassNames)

		const [setClassNames] = result.current

		const classNames = setClassNames({ 'active': true, 'hidden': false })

		expect(classNames).toBe('active')
	})

	test('should handle only classes', () => {
		const { result } = renderHook(useClassNames)

		const [setClassNames] = result.current

		const classNames = setClassNames({}, 'container')

		expect(classNames).toBe('container')
	})
})