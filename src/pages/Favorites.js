import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import classes from "./Favorites.module.css"

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <h2 className={classes.parent}>To Favorite 버튼 눌러 즐거찾기 추가하세요.</h2>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;