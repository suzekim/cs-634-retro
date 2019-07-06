import React from "react";
import "./components/Homepage.css";
import {Card, CardBody, InputGroup, Input} from "reactstrap";

function App() {
	return (
		<div>
			<Card style={{width: "25%"}}>
				<CardBody>
					<div style={{fontSize: "30px"}}>Retro</div>
				</CardBody>
			</Card>
			<InputGroup className="input">
				<Input placeholder="What went well? What could have gone better?"/>
			</InputGroup>
		</div>
	);
}

export default App;
