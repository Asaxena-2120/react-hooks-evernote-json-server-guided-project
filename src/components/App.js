import React from "react";
import Header from "./Header";
import Login from "./Login";
import NoteContainer from "./NoteContainer";
import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Route>
        <Header />
      </Route>

      <Route>
        <NoteContainer />
      </Route>

      <Route>
        <Login />
      </Route>
      
      
    </div>
  );
}

export default App;
