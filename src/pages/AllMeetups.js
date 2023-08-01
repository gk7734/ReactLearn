import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import {isRouteErrorResponse} from "react-router-dom";
import Loading from "../components/ui/Loading";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() =>{
        setIsLoading(true);
        fetch('https://react-study-gk7734-default-rtdb.firebaseio.com/meetups.json',
        ).then(response =>{
            return  response.json();
        }).then(data =>{
            const meetups = [];

            for (const key in data) {
                const meetup ={
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        })
    }, []);



    if (isLoading) {
        return <section>
            <Loading />
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>
}

export default AllMeetupsPage;