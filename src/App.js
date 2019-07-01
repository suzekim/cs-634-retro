import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/login"
					name="Login"
					render={props => <Login {...props} />}
				/>
				<Route
					exact
					path="/register"
					name="Register"
					render={props => <Register {...props} />}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
