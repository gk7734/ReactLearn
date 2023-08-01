import classes from './Layout.module.css'
// import MainNavigation from "./MainNavigation";
// import Main1 from "./main1";
import Btn from "../ui/Btn"

function Layout(props) {
    return (
    <div>
        <Btn />
        <main className={classes.main}>{props.children}</main>
    </div>
    );
}

export default Layout;