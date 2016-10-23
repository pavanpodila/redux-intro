import React from 'react';
import {connect} from 'react-redux';
import {selectMessage} from './store/action-creators';
import logo from './assets/logo.svg';

function MessageItemView({message, selectedMessage, onSelect}) {
    const selectionClass = (selectedMessage && message.id === selectedMessage.id) ? 'active' : '';
    return (
        <a className={`list-group-item list-group-item-action ${selectionClass}`}
           href="#"
           onClick={() => onSelect(message)}>
            <small>{message.from}</small>
            <div className="list-group-item-text">{message.title}</div>
        </a>
    );
}

function View({messages, loading, selectedMessage, onMessageSelect}) {
    return (
        <div>
            <div className="list-group">
                {
                    loading ? (
                        <div className="list-group-item disabled">
                            <img src={logo} alt="logo" height={24}/>
                            <strong className="text-muted">Loading...</strong>
                        </div>
                    ) : null
                }

                {
                    messages.map(msg => (<MessageItemView key={msg.id}
                                                      message={msg}
                                                      selectedMessage={selectedMessage}
                                                      onSelect={onMessageSelect}/>
                    ))
                }
            </div>
        </div>
    );
}

export const MessageList = connect(mapStateToProps, mapDispatchToProps)(View);


function mapStateToProps({mailbox: {messages, selection}, loading}) {
    return {
        messages,
        selectedMessage: selection.message,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onMessageSelect(message) {
            dispatch(selectMessage(message));
        }
    };
}