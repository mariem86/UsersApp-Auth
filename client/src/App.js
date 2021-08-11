import React, { useEffect } from "react";
import { loadUser } from "./js/action/authAction";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import NavBar from "./components/layout/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import UserList from "./components/layout/UserList";
import Userfiche from "./components/layout/Userfiche";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
    <NavBar />
    < Switch>
   
    <Route exact path="/user-list" component={UserList} />
    <Route  path="/userfiche/:id" component={Userfiche} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
