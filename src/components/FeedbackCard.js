import React from "react";
import { ListItem, ListItemText, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

type Props = {
    content: string,
    columnType: string
}

export class FeedbackCard extends React.Component<Props, State> {
    render() {
        const {content, columnType, classes} = this.props;
        return (
            <ListItem key={content} style={{ padding: "5px" }}>
                <ListItemText primary={content} style={{ padding: "10px" }} />
                {columnType === "actions" ? (
                    <Fab
                        color="#a2a7ab"
                        size="small"
                        aria-label="Add"
                        className={classes.fab}
                    >
                        <AddIcon size="small" />
                    </Fab>
                ) : null}
            </ListItem>
        )
    }
}