/**
 * Created by gusta on 7/13/2017.
 */
import {
    FETCH_RUBIX_BAR_DATA_ERROR,
    FETCH_RUBIX_BAR_DATA_STARTED,
    FETCH_RUBIX_BAR_DATA_SUCCEEDED,
    UPDATE_RUBIX_BAR_DATA_STARTED
} from "./actionTypes"

function fetchDataRubixBar(API_URL) {
    return (dispatch, getState) => {
        dispatch({type: FETCH_RUBIX_BAR_DATA_STARTED});

        fetch(API_URL)
            .then(response => response.json())
            .then(data => dispatch({type: FETCH_RUBIX_BAR_DATA_SUCCEEDED, result: data}))
            .catch(error => dispatch({type: FETCH_RUBIX_BAR_DATA_ERROR, error: error}))
    };
}

function alteraOsDados(lista) {
    return (dispatch, getState) => {
        dispatch({type: UPDATE_RUBIX_BAR_DATA_STARTED, result: mockaValores(lista)});
    }
}

function mockaValores(n) {
    let newObj;
    try {
        newObj = Object.assign(n);
        newObj.forEach((item) => {
            for (let obj in item) {
                if (typeof item[obj] == 'number')
                    item[obj] = (Math.floor(Math.random() * 100) + 1);
            }
        });
        return newObj;
    }
    catch(err){
        return null;
    }
}


module.exports = {
    fetchDataRubixBar
    , alteraOsDados
}
