/**
 * Created by gusta on 7/13/2017.
 */
import {
    FETCH_DONUT_DATA_ERROR,
    FETCH_DONUT_DATA_STARTED,
    FETCH_DONUT_DATA_SUCCEEDED


} from '../actions/actionTypes';

function donutChartMorris(state = [], action) {
    switch (action.type) {
        case FETCH_DONUT_DATA_STARTED:
            return Object.assign({}, state, {
                fetched: false
            });
        case FETCH_DONUT_DATA_SUCCEEDED:
            return {
                ...state,
                fetched: true,
                data: action.result
            };
        case FETCH_DONUT_DATA_ERROR:
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
    donutChartMorris
}
