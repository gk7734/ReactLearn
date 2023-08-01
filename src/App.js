import {Route, Routes} from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/all-meetups' element={<AllMeetupsPage />}/>
            <Route path='/new-meetup' element={<NewMeetupPage />}/>
            <Route path='/favorites' element={<Favorites />}/>
        </Routes>
    </Layout>
  );
}

export default App;