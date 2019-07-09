import * as React from "react";
import { connect } from "react-redux";
import { addFeedback } from "../actions/feedbackActions";
import TextField from "@material-ui/core/TextField";

const FeedbackField = ({ dispatch, placeholder }) => {
	let input;

	return (
		<TextField
			style={{
				padding: "20px",
				width: "80%"
			}}
			placeholder={placeholder}
			inputRef={node => (input = node)}
			onKeyPress={e => {
				if (e.key === "Enter") {
					console.log(input.value);
					dispatch(addFeedback(input.value));
					input.value = "";
				}
			}}
		/>
	);
};

export default connect()(FeedbackField);
