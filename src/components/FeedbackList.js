import React from "react";
import { List, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import {FeedbackCard} from "./FeedbackCard";

type Props = {
	positives: [],
	negatives: [],
	actions: [],
	columnType: string
};

export class FeedbackList extends React.Component<Props> {
	render() {
		let items;
		const {
			columnType,
			positives,
			negatives,
			actions,
			backgroundColor,
			classes
		} = this.props;

		if (columnType === "positives") {
			items = positives;
		} else if (columnType === "negatives") {
			items = negatives;
		} else {
			items = actions;
		}

		return (
			<List>
				{items.map(item => (
					<Paper
						className={classes.paperList}
						style={{
							backgroundColor: `${backgroundColor}`
						}}
					>
						<FeedbackCard content={item.text} columnType={columnType} classes={classes}/>
					</Paper>
				))}
			</List>
		);
	}
}

const mapStateToProps = state => ({
	positives: state.positives,
	negatives: state.negatives,
	actions: state.actions
});

export default connect(mapStateToProps)(FeedbackList);
