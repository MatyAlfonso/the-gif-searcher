//import { useState } from "react";
import { Link } from "react-router-dom";

//import hamburguerMenu from "../styles/images/hamburguer-menu.png";
//import closeMenu from "../styles/images/go-back.png";
import logo from "../styles/images/the-gif-searcher-logo.png";

export const NavBar = () => {

    //const [navBarState, setNavBarState] = useState(false);

    /*let handleClick = () => {
        setNavBarState(!navBarState);
        navBarState ? console.log('Menu cerrado') : console.log('Menu abierto');
    }*/


    return (
        <div className="nav-bar__layout">
            {/*navBarState ?
                <nav className="nav-bar__body">
                    <img onClick={() => handleClick()} className="nav-bar__hamburguer-menu-opened" src={closeMenu} alt="Close menu" />
                    <div className="nav-bar__container">
                        <Link to="/">
                            <button className="nav-bar__button">Home</button>
                        </Link>
                        <Link to="search">
                            <button className="nav-bar__button">Search Gifs</button>
                        </Link>
                        <Link to="/">
                            <button className="nav-bar__button">Last Search</button>
                        </Link>
                    </div>
                </nav>
                :
                <nav>
                    <img onClick={() => handleClick()} className="nav-bar__hamburguer-menu-closed" src={hamburguerMenu} alt="Hamburguer menu" />
                </nav>
            */}
            <nav className="nav-bar__container">
                <Link to="/">
                    <img className="nav-bar__logo" src={logo} alt="The Gif Searcher Logo" />
                </Link>
            </nav>
        </div>
    )
}
