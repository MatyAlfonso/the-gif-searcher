import { Link } from "react-router-dom";
//import { NavBar } from '../components/NavBar';
import logoImg from '../styles/images/the-gif-searcher-logo.jpg';

export const MainPage = () => {
    return (
        <>
            {/*<NavBar />*/}
            <div className="main-page__layout">
                <img src={logoImg} alt="The Gif Searcher Logo" />
                <Link to="search">
                    <button className="main-page__button">
                        START
                    </button>
                </Link>
            </div>
        </>
    )
}
