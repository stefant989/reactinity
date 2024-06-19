module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	preset: 'ts-jest',
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1'
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
}