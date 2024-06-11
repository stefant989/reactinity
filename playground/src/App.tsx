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

			<div className='grid'>
				<div className='mobile-col-12 tablet-col-6 laptop-col-4 desktop-col-2 bg-red'>Column 1</div>
				<div className='mobile-col-12 tablet-col-6 laptop-col-4 desktop-col-2 bg-blue'>Column 2</div>
				<div className='mobile-col-12 tablet-col-6 laptop-col-4 desktop-col-2 bg-white'>Column 3</div>
				<div className='mobile-col-12 tablet-col-6 laptop-col-4 desktop-col-2 bg-red'>Column 4</div>
				<div className='mobile-col-12 tablet-col-6 laptop-col-4 desktop-col-2 bg-red'>Column 5</div>
				<div className='mobile-col-12 tablet-col-6 laptop-col-4 desktop-col-2 bg-red'>Column 6</div>
			</div>
		</>
	)
}

export default App
