import React from "react";
import { Card, CardBody } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FeedbackField from "./components/FeedbackField";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(0),
		textAlign: "center",
		marginBottom: "10px",
		backgroundColor: "#f0f0f0",
		color: theme.palette.text.secondary
	},
	paperList: {
		padding: theme.spacing(0),
		textAlign: "center",
		marginBottom: "10px",
		backgroundColor: "#ffffff",
		color: theme.palette.text.secondary
	}
}));

function App() {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<CardBody className="header">
					<div className="headerBody">Retro</div>
				</CardBody>
			</Card>

			<Card style={{ padding: "15px" }}>
				<CardBody>
					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={4}>
								<Paper className={`${classes.paper}`}>
									<FeedbackField placeholder="What went well?" columnType="positive"/>
								</Paper>
								<div className={classes.paperList}>
									<FeedbackList columnType="positives"/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<Paper className={`${classes.paper}`}>
									<FeedbackField placeholder="What could have gone better?"columnType="negative"/>
								</Paper>
								<div className={classes.paperList}>
									<FeedbackList columnType="negatives"/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<Paper className={`${classes.paper}`}>
									<FeedbackField placeholder="Action Items" columnType="action"/>
								</Paper>
								<div className={classes.paperList}>
									<FeedbackList columnType="actions"/>
								</div>
							</Grid>
						</Grid>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}

export default App;
