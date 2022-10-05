import './App.scss'
import 'aos/dist/aos.css'

import Welcome from './components/Welcome'
import InfoSlides from './components/InfoSlides'
import NextButton from './components/NextButton'


export default function App() {
    return (<>
		<div className="section">
			<Welcome />
			<NextButton num={1} />
		</div>
		<div className="section">
			<InfoSlides />
			{/* <NextButton up={true}/> */}
		</div>
	</>)
}
