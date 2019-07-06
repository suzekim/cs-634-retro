import React from "react";
import {Card, CardBody} from "reactstrap";
import {FeedbackField} from "./components/FeedbackField";

function App() {
	return (
		<div>
			<Card style={{width: "25%"}}>
				<CardBody>
					<div style={{fontSize: "40px"}}>Retro</div>
				</CardBody>
			</Card>
			<FeedbackField/>
		</div>
	);
}

export default App;
