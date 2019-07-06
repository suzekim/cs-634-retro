import React from "react";
import {Card, CardBody} from "reactstrap";
import FeedbackField from "./components/FeedbackField";
import FeedbackList from "./components/FeedbackList";

function App() {
	return (
		<div>
			<Card style={{width: "25%"}}>
				<CardBody>
					<div style={{fontSize: "40px"}}>Retro</div>
				</CardBody>
			</Card>
			<FeedbackField />
			<FeedbackList/>
		</div>
	);
}

export default App;
