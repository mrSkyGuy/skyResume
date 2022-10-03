import backgroundImg from '../../img/bg-1.jpg'
import './index.scss'

export default function Welcome() {
    return (
        <div className="welcome" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="welcome__about">
                <h1>Hi, there! I'm Zaur, 17 yo, Moscow student</h1>
                and a   lso
                <p><span>Ambitious</span> FrontEnd developer</p>
            </div>
        </div>
    )
}
