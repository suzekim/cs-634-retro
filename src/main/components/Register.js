import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row
} from "reactstrap";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMsg: null,
			view: null
		};
	}
	/*----------------- Methods -----------------*/
	//DOES: handles create account
	handleCreate = () => {
		//get form data
		const account = {
			username: document.getElementById("username").value,
			password: document.getElementById("password").value,
			email: document.getElementById("email").value
		};

		//validate fields
		if (!account.username || !account.password || !account.email) {
			this.setState({ errorMsg: "*All fields are required" });
		} else {
			this.create(account);
			//clear form
			document.getElementById("username").value = "";
			document.getElementById("password").value = "";
			document.getElementById("email").value = "";
		}
	};

	//DOES: to login button handler
	handleToLogin = () => {
		//redirect to login page
		this.setState({ view: "login" });
	};

	/*-------------------- API -------------------*/
	//DOES: post account
	create = account => {
		let data = {
			account: account
		};

		const createRequest = new Request("http://localhost:3000/api/accounts", {
			method: "POST",
			mode: "cors",
			credentials: "include",
			redirect: "follow",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify(data)
		});

		fetch(createRequest)
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (data.error) {
					this.setState({ errorMsg: data.error });
				} else {
					this.setState({ view: "login" });
				}
			})
			.catch(err => {
				console.log(`Could not create account: ${err}`);
			});
	};

	/*-------------------- Render -------------------*/
	render() {
		let { view } = this.state;

		if (view === "login") {
			return <Redirect to="login" />;
		} else {
			return (
				<div className="app flex-row align-items-center">
					<Container>
						<Row className="justify-content-center">
							<Col md="9" lg="7" xl="6">
								<Card className="mx-4">
									<CardBody className="p-4">
										<Form>
											<h1>Register</h1>
											<p className="text-muted">Create your account</p>

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

											<InputGroup className="mb-3">
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

											<InputGroup className="mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>@</InputGroupText>
												</InputGroupAddon>
												<Input
													id="email"
													type="text"
													placeholder="Email"
													autoComplete="email"
												/>
											</InputGroup>

											<p className="text-danger">{this.state.errorMsg}</p>
											<Button
												color="success"
												block
												type="button"
												onClick={this.handleCreate}
											>
												Create Account
											</Button>
										</Form>
									</CardBody>

									<CardFooter className="p-4">
										<Row>
											<Col xs="12" sm="12">
												<Button
													type="button"
													className="btn-facebook mb-1 float-right"
													onClick={this.handleToLogin}
												>
													<span>Go to Login</span>
												</Button>
											</Col>
										</Row>
									</CardFooter>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}

export default Register;
