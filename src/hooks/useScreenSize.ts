import { useEffect, useState } from 'react'
import { getScreenInfo } from '../utils/helpers'

type Info = {
	width: number,
	height: number,
	name: string
}

export const useScreenSize = (): Info => {
	const [info, setInfo] = useState<Info>({
		width: 0,
		height: 0,
		name: ''
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
		name: info.name
	}
}
