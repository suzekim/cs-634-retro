import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";

type Props = {
	positives: [],
	negatives: [],
	actions: [],
	columnType: string
}

export class FeedbackList extends React.Component<Props> {
	render() {
		let items;
		const {columnType, positives, negatives, actions} = this.props;
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
					<ListItem key={item.text}>
						<ListItemText primary={item.text}/>
					</ListItem>
				))}
			</List>
		)
	}
}

const mapStateToProps = state => ({
	positives: state.positives,
	negatives: state.negatives,
	actions: state.actions
});

export default connect(mapStateToProps)(FeedbackList);
