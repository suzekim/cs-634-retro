import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row
} from "reactstrap";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: null,
			errorMsg: null,
			view: "login"
		};
	}

	/*----------------- Handlers -----------------*/
	//DOES: handles login button
	handleLogin = () => {
		//get form data
		const account = {
			username: document.getElementById("username").value,
			password: document.getElementById("password").value
		};

		//validate fields
		if (!account.username || !account.password) {
			this.setState({ errorMsg: "*All fields are required" });
		} else {
			this.login(account);
			//clear form
			document.getElementById("username").value = "";
			document.getElementById("password").value = "";
		}
	};

	//DOES handles register button
	handleRegister = () => {
		//change view to register page
		this.setState({ view: "register" });
	};

	/*-------------------- API -------------------*/
	//DOES: post login
	login = account => {
		let data = {
			username: account.username,
			password: account.password
		};

		const loginRequest = new Request(
			"http://localhost:3000/api/accounts/login",
			{
				method: "POST",
				mode: "cors",
				credentials: "include",
				redirect: "follow",
				headers: new Headers({ "Content-Type": "application/json" }),
				body: JSON.stringify(data)
			}
		);

		fetch(loginRequest)
			.then(response => {
				return response.json();
			})
			.then(data => {
				let { account } = data;

				if (account) {
					//set up session storage for token
					window.sessionStorage.setItem("token", account.token);
					this.setState({ current: account, view: "dashboard" });
				} else {
					this.setState({ errorMsg: "*Invalid login." });
				}
			})
			.catch(errors => {
				console.log(`Could not login: ${errors}`);
			});
	};

	/*------------------ Render ------------------*/
	render() {
		let { view, current } = this.state;

		if (view === "dashboard") {
			return <Redirect to={{ pathname: "/dashboard", state: { current } }} />;
		} else if (view === "register") {
			return <Redirect to="/register" />;
		} else if (view === "login") {
			return (
				<div className="app flex-row align-items-center">
					<Container>
						<Row className="justify-content-center">
							<Col md="8">
								<CardGroup>
									<Card className="p-4">
										<CardBody>
											<Form>
												<h1>Login</h1>
												<p className="text-muted">Sign in as admin</p>

												<InputGroup className="mb-3">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="icon-user" />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														id="username"
														type="text"
														placeholder="Username"
													/>
												</InputGroup>

												<InputGroup className="mb-4">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="icon-lock" />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														id="password"
														type="password"
														placeholder="Password"
													/>
												</InputGroup>

												<Row>
													<Col xs="12">
														<p className="text-danger">{this.state.errorMsg}</p>
														<Button
															color="primary"
															className="px-4"
															onClick={this.handleLogin}
														>
															Login
														</Button>
													</Col>
												</Row>
											</Form>
										</CardBody>
									</Card>

									<Card
										className="text-white bg-primary py-5 d-md-down-none"
										style={{ width: "44%" }}
									>
										<CardBody className="text-center">
											<div>
												<h2>Sign up</h2>
												<p>
													Sign up for an account with us. <br />
													Explore with us.
												</p>
												<Link to="/register">
													<Button
														color="primary"
														className="mt-3"
														active
														tabIndex={-1}
														type="button"
														onClick={this.handleRegister}
													>
														Register
													</Button>
												</Link>
											</div>
										</CardBody>
									</Card>
								</CardGroup>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}

export default Login;
