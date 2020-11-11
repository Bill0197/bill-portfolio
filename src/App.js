import React, { useRef } from "react";
import "./assets/App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import SingleRoom from "./Pages/SingleRoom";
// import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
// import FeaturedRooms from "./Components/FeaturedRooms";

const offset = document.getElementById("inputref");

function App() {
    const inputRef = useRef();
    return (
        <div id="inputref">
            <Navbar ref={inputRef} offset={offset} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/services" exact component={Services} />
                {/* <Route path="/rooms/:slug" exact component={SingleRoom} /> */}
                {/* <Route component={Error} /> */}
            </Switch>
        </div>
    );
}

export default App;
