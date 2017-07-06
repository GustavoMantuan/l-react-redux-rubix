import {
    GET_GREETING
} from './actionTypes';


function getGreeting(inputMessage) {

    return dispatch => {
        dispatch({
            type: GET_GREETING,
            result: inputMessage,
        });
    };
}

module.exports = {
    getGreeting,
};
