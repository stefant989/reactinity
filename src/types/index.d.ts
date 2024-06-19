export type ScreenInfo = {
	width: number,
	height: number,
	type: string,
	isMobile: boolean,
	browserName: string,
	browserVersion: string
}

type Condition = {
	[key: string]: boolean
}