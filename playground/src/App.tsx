import { useScreenInfo } from 'reactinity'

function App() {
	const screen = useScreenInfo()

	return (
		<>
			{screen.width}<br />
			{screen.height}<br />
			{screen.type}<br />
			{screen.browserName}<br />
			{screen.browserVersion}

			<div className='grid'>
				<div className='grid-row'>
					<div className='xSmall-12 small-6 mid-4 large-2'>Column 1</div>
					<div className='xSmall-12 small-6 mid-4 large-2'>Column 2</div>
					<div className='xSmall-12 small-6 mid-4 large-2'>Column 3</div>
					<div className='xSmall-12 small-6 mid-4 large-2'>Column 4</div>
					<div className='xSmall-12 small-6 mid-4 large-2'>Column 5</div>
					<div className='xSmall-12 small-6 mid-4 large-2'>Column 6</div>
				</div>
			</div>
		</>
	)
}

export default App
