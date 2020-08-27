import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </Router>
        {/* Sidebar */}
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
