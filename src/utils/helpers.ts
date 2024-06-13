

type Info = {
	width: number,
	height: number,
	type: string,
	isMobile: boolean,
	browserName: string,
	browserVersion: string
}

export const getScreenInfo = (): Info => {
	const width: number = window.innerWidth
	const height: number = window.innerHeight
	const type: string = window.screen.orientation.type.replace('-primary', '')
	const userAgent: string = navigator.userAgent
	let browserName: string = ''
	let browserVersion: string = ''

	const isMobile: boolean = /Mobile|Android|iP(hone|od|ad)|IEMobile|BlackBerry|Opera Mini|Fennec|Windows Phone/i.test(userAgent)

	const getVersion = (regex: RegExp): string => {
		const match = userAgent.match(regex)
		return match ? match[1] : 'Unknown'
	}

	if (/chrome|crios|crmo/i.test(userAgent)) {
		browserName = 'Chrome'
		browserVersion = getVersion(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	} else if (/firefox|iceweasel|fxios/i.test(userAgent)) {
		browserName = 'Firefox'
		browserVersion = getVersion(/(?:firefox|iceweasel|fxios)\/(\d+(\.\d+)?)/i)
	} else if (/safari/i.test(userAgent) && !/chrome|crios|crmo/i.test(userAgent)) {
		browserName = 'Safari'
		browserVersion = getVersion(/version\/(\d+(\.\d+)?)/i)
	} else if (/msie|trident/i.test(userAgent)) {
		browserName = 'Internet Explorer'
		browserVersion = getVersion(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	} else if (/opera|opr/i.test(userAgent)) {
		browserName = 'Opera'
		browserVersion = getVersion(/(?:opera|opr)\/(\d+(\.\d+)?)/i)
	} else if (/edg/i.test(userAgent)) {
		browserName = 'Edge'
		browserVersion = getVersion(/edg\/(\d+(\.\d+)?)/i)
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