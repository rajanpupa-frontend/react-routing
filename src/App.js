import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route path="/shop/:id" component={ItemDetail}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}

export default App;
