import React from "react";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";

const FeedbackList = ({feedbacks}) => (
    <List>
        {feedbacks.map(feedback =>
        <ListItem>
            <ListItemText primary={feedback.text}/>
        </ListItem>)}
    </List>
)

const mapStateToProps = state => ({
    feedbacks: state.feedbacks
})

export default connect(mapStateToProps)(FeedbackList);