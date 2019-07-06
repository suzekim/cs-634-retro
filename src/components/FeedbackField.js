import * as React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
    addFeedback: string => {}
}

type State = {
    value: string
}

export class FeedbackField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {value:''}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <TextField
                placeholder="What went well? What could have gone better?"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        this.props.addFeedback(this.state.value);
                    }
                }}
            />
        )
    }
}

export default FeedbackField