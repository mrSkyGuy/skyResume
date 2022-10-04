import './App.scss'
import Welcome from './components/Welcome'
import NextButton from './components/NextButton'


export default function App() {
    return (<>
		<div className="section">
			<Welcome />
			<NextButton num={1} />
		</div>
	</>)
}
