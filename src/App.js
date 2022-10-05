import './App.scss'
import 'aos/dist/aos.css'

import Welcome from './components/Welcome'
import TechStack from './components/DevPath'
import NextButton from './components/NextButton'


export default function App() {
    return (<>
		<div className="section">
			<Welcome />
			<NextButton num={1} />
		</div>
		<div className="section">
			<TechStack />
			<NextButton up={true}/>
		</div>
	</>)
}
