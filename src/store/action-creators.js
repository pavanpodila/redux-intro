import {SELECT_FOLDER, SELECT_MESSAGE, END_LOAD, START_LOAD, LOAD} from './action-constants';

export function selectFolder(folder) {
    return {
        type: SELECT_FOLDER,
        payload: folder
    };
}

export function setLoading(flag) {
    return {
        type: flag ? START_LOAD : END_LOAD
    };
}

export function loadMessages(messages) {
    return {
        type: LOAD,
        payload: messages
    };
}

export function selectMessage(message) {
    return {
        type: SELECT_MESSAGE,
        payload: message
    };
}

