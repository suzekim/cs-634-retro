import * as React from 'react';
import { connect } from 'react-redux'
import { addFeedback } from "../actions/feedbackActions";
import TextField from '@material-ui/core/TextField';


const FeedbackField = ({dispatch}) => {
    let input;

    return (
        <TextField
            style={{
                paddingTop: '20px',
                paddingLeft:'14px',
                width: '50%'
            }}
            placeholder="What went well? What could have gone better?"
            inputRef={node => input = node}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    console.log(input.value);
                    dispatch(addFeedback(input.value));
                    input.value=''
                }
            }}
        />
    )
}

export default connect()(FeedbackField)