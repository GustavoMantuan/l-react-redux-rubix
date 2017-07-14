/**
 * Created by gusta on 7/13/2017.
 */
import {
    FETCH_RUBIX_BAR_DATA_ERROR,
    FETCH_RUBIX_BAR_DATA_SUCCEEDED,
    FETCH_RUBIX_BAR_DATA_STARTED,
    UPDATE_RUBIX_BAR_DATA_SUCCEEDED
} from '../actions/actionTypes';

function rubixBarChart(state = [], action) {
    switch (action.type) {
        case FETCH_RUBIX_BAR_DATA_STARTED:
            return Object.assign({}, state, {
                fetched: false
            });
        case FETCH_RUBIX_BAR_DATA_SUCCEEDED:
            return {
                ...state,
                fetched: true,
                data: action.result
            };
        case UPDATE_RUBIX_BAR_DATA_SUCCEEDED:
            return {
                ...state,
                fetched: true,
                data: action.result
            };
        case FETCH_RUBIX_BAR_DATA_ERROR:
            return {
                ...state,
                error: true,
                fetched: false,
                data: action.error
            }
        default:
            return state;
    }
}

module.exports = {
    rubixBarChart
}
