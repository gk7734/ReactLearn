import {useContext} from "react";

import "./mainNavi.css"
import {Link} from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import favoritesContext from "../../store/favorites-context";
import {findByRole} from "@testing-library/react";
import classes from "./MainNavigationTest.module.css"

function MainNavi() {
    const favoritesCtx = useContext(favoritesContext)

    return (
        <div className="container">
            <h1>
                <a href="#menu">Click me</a>
            </h1>

            <div className="popover" id="menu">
                <div className = 'content'>
                    <a href="#" className="close"></a>
                    <div className = 'nav'>
                        <ul className = 'nav_list'>
                            <li className="nav_list_item">
                                <Link to='/all-meetups'>All Meetups</Link>
                            </li>
                            <li className='nav_list_item'>
                                <Link to='/new-meetup'>Add New Meetup</Link>
                            </li>
                            <li className='nav_list_item'>
                                <Link to='/favorites'>My Favorites</Link>
                                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                            </li>
                            <li className='nav_list_item'>
                                <Link to='https://github.com/gk7734/ReactLearn'>Develop Page</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNavi;