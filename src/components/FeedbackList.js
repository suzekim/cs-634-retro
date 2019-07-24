import React from "react";
import { List, Paper, ListItem, ListItemText, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";

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
						<ListItem key={item.text} style={{ padding: "5px" }}>
							<ListItemText primary={item.text} style={{ padding: "10px" }} />
							<Fab
								color="#a2a7ab"
								size="small"
								aria-label="Add"
								className={classes.fab}
							>
								<AddIcon size="small" />
							</Fab>
						</ListItem>
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
