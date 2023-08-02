import { Link } from 'react-router-dom';

import classes from "./MainNavigationTest.module.css";

function MainNavigationTest() {
    return <header className={classes.header}>
        <div className={classes.logo}>GK Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'></Link>
                </li>
                <li>
                    <Link to='/new-meetup'></Link>
                </li>
                <li>
                    <Link to='/favorites'></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigationTest;