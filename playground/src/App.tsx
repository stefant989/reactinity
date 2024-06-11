import { useScreenSize } from 'reactinity'

function App() {
	const screen = useScreenSize()
	return (
		<>
			{screen.name === 'MOBILE' ? (
				<h2 className='font-50 purple-dark'>MOBILE</h2>
			) : screen.name === 'LANDSCAPE' ? (
				<h2 className='font-50 purple-dark'>LANDSCAPE</h2>
			) : screen.name === 'TABLET' ? (
				<h2 className='font-50 red-light'>TABLET</h2>
			) : screen.name === 'LAPTOP' ? (
				<h2 className='font-50 yellow'>LAPTOP</h2>
			) : screen.name === 'DESKTOP' ? (
				<h2 className='font-50 blue-dark'>DESKTOP</h2>
			) : screen.name === 'TV' ? (
				<h2 className='font-50 gray-dark'>TV</h2>
			) : null}

		</>
	)
}

export default App
