import React, { useRef } from "react";
import "./assets/App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Budget from "./Components/Budget";
import Hotel from "./Components/Hotel";
import Webbrain from "./Components/Webbrain";
import Bootstrap from "./Components/Bootstrap";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const offset = document.getElementById("inputref");

function App({ forwardRef }) {
    const inputRef = useRef();
    return (
        <div id="inputref">
            <Navbar refs={inputRef} offset={offset} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/services" exact component={Services} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/portfolio/hotel" exact component={Hotel} />
                <Route path="/portfolio/webbrain" exact component={Webbrain} />
                <Route path="/portfolio/budget" exact component={Budget} />
                <Route
                    path="/portfolio/bootstrap"
                    exact
                    component={Bootstrap}
                />
            </Switch>
        </div>
    );
}

export default App;
