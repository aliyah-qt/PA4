import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import image from '/Users/samhithatarra/Desktop/PA4/react-crud-web-api-master/src/bobalogo.png';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

{/* <li className="nav-item"></li> */}
class App extends Component {
  render() {
    return (
      
      <div>
            
        <nav className="navbar navbar-light">
        
          <Link to={"/teas"} className="navbar-brand h1" >
          <img src={image} height={150} width={300} />
          </Link>
          

          <div className="navbar-nav">
              <Link to={"/teas"} className="nav1">
                Teas
              </Link>
            
              <Link to={"/add"} className="nav1">
                Add a Tea
              </Link>
            
          </div>
          
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/teas"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/teas/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
