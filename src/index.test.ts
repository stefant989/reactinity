import * as hooks from './index'
import { useClassNames as originalUseClassNames } from './hooks/useClassNames'
import { useScreenInfo as originalUseScreenInfo } from './hooks/useScreenInfo'

jest.mock('./hooks/useScreenInfo', () => ({
	useScreenInfo: jest.fn()
}))

jest.mock('./hooks/useClassNames', () => ({
	useClassNames: jest.fn()
}))

describe('hooks re-exports', () => {
	test('should re-export useScreenInfo from useScreenInfo module', () => {
		expect(hooks.useScreenInfo).toBe(originalUseScreenInfo)
	})
	test('should re-export useClassNames from useClassNames module', () => {
		expect(hooks.useClassNames).toBe(originalUseClassNames)
	})
})