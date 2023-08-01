import classes from "./Btn.module.css"
import {Link} from "react-router-dom";

function Btn() {
    return (
        <div className={classes.topRightButtonContainer}>
            <li className={classes.topRightButton}>
                <Link to='/'>Back</Link>
            </li>
        </div>
    );
}

export default Btn;