import {SELECT_FOLDER, SELECT_MESSAGE, LOAD, START_LOAD, END_LOAD} from './action-constants';
import {combineReducers} from 'redux';
const initialState = {
    mailbox: {
        folders: [
            'inbox',
            'sent',
            'trash'
        ],
        selection: {
            folder: null,
            message: null
        },
        messages: [],

    },
    loading: false
};

export const reducer = combineReducers({
    mailbox: mailboxReducer,
    loading: loadingReducer
});

function loadingReducer(state = initialState.loading, action) {
    switch (action.type) {

        case START_LOAD:
            return true;

        case END_LOAD:
            return false;

        default:
            return state;
    }
}

function mailboxReducer(state = initialState.mailbox, action) {
    switch (action.type) {

        case LOAD:
            return {
                ...state,
                messages: action.payload
            };

        case SELECT_MESSAGE:
            return {
                ...state,
                selection: {
                    ...state.selection,
                    message: action.payload
                }
            };

        case SELECT_FOLDER:
            return {
                ...state,
                selection: {
                    ...state.selection,
                    folder: action.payload,
                    message: null
                }
            };

        default:
            return state;
    }
}