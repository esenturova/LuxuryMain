import "./header.scss"
import logo from '../../assets/img/svg/headerl.svg'
import { Link } from 'react-router-dom'


function Header(){
    return(
        <div className="header">    
            <div className="container">
                <div className="header__row row">
                    <div className="header__logo">
                        <img src={logo} className="header__logo" alt="Logo"/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__menu">
                            <li className="header__list"><Link className="header__link" to="/">Home</Link></li>
                            <li className="header__list"><Link className="header__link" to="/facilities">Facilities</Link></li>
                            <li className="header__list"><Link className="header__link" to="/rate">Rooms</Link></li>
                            <li className="header__list"><Link className="header__link" to="/contact">Contact-us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}


export default Header
