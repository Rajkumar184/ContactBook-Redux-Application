import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./Components/AddToContact.js";
import EditContact from "./Components/EditContact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Auth/Login";

const App = () => {
	return (
		<>
			<ToastContainer />
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/add" component={AddPost} />
					<Route exact path="/edit/:id" component={EditContact} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</>
	);
};
export default App;
