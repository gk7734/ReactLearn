import classes from './Layout.module.css'
// import MainNavigationTest from "./MainNavigationTest";
// import Main1 from "./mainNavi";
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