import React from "react";
import { Route } from "react-router-dom";
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
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route exact path="/add" component={AddPost} />
			<Route exact path="/edit/:id" component={EditContact} />
			<Route exact path="/login" component={Login} />
		</>
	);
};
export default App;
