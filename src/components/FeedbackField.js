import * as React from "react";
import { connect } from "react-redux";
import {addAction, addNegative, addPositive} from "../actions/feedbackActions";
import TextField from "@material-ui/core/TextField";

const FeedbackField = ({ dispatch, placeholder, columnType }) => {
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
					if (columnType === "positive") {
						dispatch(addPositive(input.value));
					} else if (columnType === "negative") {
						dispatch(addNegative(input.value));
					} else {
						dispatch(addAction(input.value))
					}
					input.value = "";
				}
			}}
		/>
	);
};

export default connect()(FeedbackField);
