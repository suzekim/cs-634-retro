import { combineReducers } from 'redux'
import positives from './positives'
import negatives from "./negatives";
import actions from "./actions";

const retroApp = combineReducers({
    positives,
    negatives,
    actions
});

export default retroApp;
