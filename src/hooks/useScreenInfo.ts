import { useEffect, useState } from 'react'
import { getScreenInfo } from '../utils/helpers'
import { ScreenInfo } from '../types'

export const useScreenInfo = (): ScreenInfo => {
	const [info, setInfo] = useState<ScreenInfo>({
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
