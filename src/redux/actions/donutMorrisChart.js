/**
 * Created by gusta on 7/13/2017.
 */
import {
    FETCH_DONUT_DATA_ERROR,
    FETCH_DONUT_DATA_STARTED,
    FETCH_DONUT_DATA_SUCCEEDED
} from "./actionTypes"

function fetchDataDonut(API_URL) {
    return (dispatch, getState) => {
        dispatch({type: FETCH_DONUT_DATA_STARTED});

        fetch(API_URL)
            .then(response => response.json())
            .then(data => dispatch({type: FETCH_DONUT_DATA_SUCCEEDED, result: data}))
            .catch(error => dispatch({type: FETCH_DONUT_DATA_ERROR, error: error}))
    };
}


module.exports = {
    fetchDataDonut
}
