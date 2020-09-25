import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FrontPage from './components/frontPage/FrontPage/FrontPage';
import PlacesCard from './components/PlacesCard/PlacesCard';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import BookingDetails from './components/BookingDetails/BookingDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p> {loggedInUser.name}</p>
    <Router>
      <Header></Header>
       <Switch>
          <Route exact path="/">
            <FrontPage></FrontPage>
          </Route>
          <Route path="/placesCard">
            <PlacesCard></PlacesCard>
          </Route>
          <Route path="/login">
              <Login></Login>
            </Route>
          <Route exact path="/booking">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/BookingDetails">
            <BookingDetails></BookingDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
