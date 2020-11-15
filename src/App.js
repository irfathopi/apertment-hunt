import './App.css';
import Navbar from './Component/Deshboard/Navbar/Navbar';
import Header from './Component/Deshboard/Header/Header';
import HouseCards from './Component/Deshboard/HouseCards/HouseCards';
import Service from './Component/Deshboard/Service/Service';
import Footer from './Component/Deshboard/Footer/Footer';
import HotelBooking from './Component/HotelBooking/HotelBooking';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { createContext, useState } from 'react';



export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
                <Navbar />
                <Header />
                <HouseCards />
                <Service />
                <Footer />
            </Route>
            <Route path="/hotelbooking">
                <HotelBooking/>
            </Route>
        </Switch>
      </Router>
    </div>
    </userContext.Provider>
  );
}

export default App;
