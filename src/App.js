import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./composants/Admin";
import Login from "./composants/Login";
import User from "./composants/User";
import Agency from "composants/Agency";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/admin" />
            ) : (
              <Login parentCallback={callbackFunction} />
            )
          }
        />
        <Route
          path="/admin"
          element={loggedIn ? <Navigate to="/" /> : <Admin />}
        />

        <Route path="user" element={<User />} />
        <Route path="agency" element={<Agency />} />
      </Routes>
    </Router>
  );
};

export default App;
