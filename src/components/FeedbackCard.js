import React from "react";
import { ListItem, ListItemText, Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

type Props = {
	content: string,
	columnType: string
};

type State = {
	edit: boolean,
	actionItem: string,
	isComplete: boolean
};

export class FeedbackCard extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleComplete = this.handleComplete.bind(this);

		if (this.props.columnType === "actions") {
			this.state = { edit: false, actionItem: this.props.content };
		} else {
			this.state = { edit: false };
		}
	}

	handleEdit() {
		this.setState(state => ({
			edit: !state.edit
		}));
	}

	handleChange(event) {
		this.setState({ actionItem: event.target.value });
	}

	handleComplete() {
		this.setState(state => ({
			isComplete: !state.isComplete
		}));
	}

	render() {
		const { edit, actionItem, isComplete } = this.state;
		let { content, columnType, classes } = this.props;
		let style;

		if (columnType === "actions") {
			content = actionItem;
		}

		if (isComplete) {
			style = {
				padding: "10px",
				textDecoration: "line-through"
			};
		} else {
			style = {
				padding: "10px"
			};
		}

		if (!edit) {
			return (
				<ListItem key={content} onClick={this.handleComplete}>
					<ListItemText primary={content} style={style} />
					{columnType === "actions" && !isComplete ? (
						<Fab
							size="small"
							aria-label="Add"
							className={classes.fab}
							onClick={this.handleEdit}
						>
							<EditIcon size="small" />
						</Fab>
					) : columnType === "actions" && isComplete ? (
						<Fab
							size="small"
							aria-label="Add"
							className={classes.fab}
							onClick={this.handleEdit}
							disabled
						>
							<EditIcon size="small" />
						</Fab>
					) : null}
				</ListItem>
			);
		} else {
			return (
				<TextField
					style={{
						padding: "17px",
						width: "80%"
					}}
					value={content}
					onChange={e => {
						this.handleChange(e);
					}}
					onKeyPress={e => {
						if (e.key === "Enter") {
							this.handleEdit();
						}
					}}
				/>
			);
		}
	}
}
