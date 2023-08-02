import classes from "./Btn.module.css"
import {Link} from "react-router-dom";

function Btn() {
    return (
        <div className={classes.topRightButtonContainer}>
                <Link to='/' className={classes.topRightButton}>Back</Link>
        </div>
    );
}

export default Btn;