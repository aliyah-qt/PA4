import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

{/* <li className="nav-item"></li> */}
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <Link to={"/tutorials"} className="navbar-brand h1">
            THE UNORIGINAL BOBA STORE
          </Link>
          
          <div className="navbar-nav">
            
              <Link to={"/tutorials"} className="nav1">
                Teas
              </Link>
            
              <Link to={"/add"} className="nav1">
                Add a Tea
              </Link>
            
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
