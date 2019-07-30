import React from "react";
import {ListItem, ListItemText, Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

type Props = {
    content: string,
    columnType: string
}

type State = {
    edit: boolean,
    actionItem: string
}

export class FeedbackCard extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        if (this.props.columnType === "actions") {
            this.state = {edit: false, actionItem: this.props.content}
        } else {
            this.state = {edit: false}
        }
    }

    handleClick() {
        this.setState(state => ({
            edit: !state.edit
        }));
    }

    handleChange(event) {
        this.setState({actionItem: event.target.value})
    }

    render() {
        const {edit, actionItem} = this.state;
        let {content, columnType, classes} = this.props;
        if (columnType === "actions") {content = actionItem}

        if(!edit) {
            return (
                <ListItem key={content} style={{padding: "5px"}}>
                    <ListItemText primary={content} style={{padding: "10px"}}/>
                    {columnType === "actions" ? (
                        <Fab
                            color="#a2a7ab"
                            size="small"
                            aria-label="Add"
                            className={classes.fab}
                            onClick={this.handleClick}
                        >
                            <AddIcon size="small"/>
                        </Fab>
                    ) : null}
                </ListItem>
            )
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
                            this.handleClick();
                        }
                    }}
                />
            )
        }
    }
}