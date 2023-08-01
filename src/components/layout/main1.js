import "./main1.css"
import {Link} from "react-router-dom";

function main1(props) {
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default main1;