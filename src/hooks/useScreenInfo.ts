import { useEffect, useState } from 'react'
import { getScreenInfo } from '../utils/helpers'

type Info = {
	width: number,
	height: number,
	type: string,
	isMobile: boolean,
	browserName: string,
	browserVersion: string
}

export const useScreenInfo = (): Info => {
	const [info, setInfo] = useState<Info>({
		width: 0,
		height: 0,
		type: '',
		isMobile: false,
		browserName: '',
		browserVersion: ''
	})

	useEffect(() => {
		const initialScreenInfo = getScreenInfo()
		setInfo(initialScreenInfo)
		const handleResize = () => {
			const resizedScreenInfo = getScreenInfo()
			setInfo(resizedScreenInfo)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		width: info.width,
		height: info.height,
		type: info.type,
		isMobile: info.isMobile,
		browserName: info.browserName,
		browserVersion: info.browserVersion
	}
}
