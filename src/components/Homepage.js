import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardGroup } from "reactstrap";
import "./Homepage.css";

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Card style={{ width: "25%" }}>
				<CardBody>
					<div style={{ fontSize: "30px" }}>Retro</div>
				</CardBody>
			</Card>
		);
	}
}

export default Homepage;
