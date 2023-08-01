import { useState } from "react";

import MeetupList from "../components/meetups/MeetupList";
import {isRouteErrorResponse} from "react-router-dom";
import Loading from "../components/ui/Loading";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];
function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState();
    fetch('https://react-study-gk7734-default-rtdb.firebaseio.com/meetups.json',
        ).then(response =>{
            return  response.json();
    }).then(data =>{
        setIsLoading(true);
    })

    if (isLoading) {
        return <section>
            <Loading />
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA}/>
    </section>
}

export default AllMeetupsPage;