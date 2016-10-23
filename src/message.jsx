import React from 'react';
import {connect} from 'react-redux';

function View({message}) {

    const emptyMessage = (<p className="text-muted">No Message Selected</p>);

    return (message) ? (
        <div>
            <small>
                <strong>From</strong>: {message.from}
            </small>
            <div>
                <strong>Subject</strong>: {message.title}
            </div>
            <hr/>
            <p>{message.body}</p>
        </div>
    ) : emptyMessage;
}


export const Message = connect(mapStateToProps)(View);

function mapStateToProps({mailbox}) {
    return {
        message: mailbox.selection.message
    };
}

