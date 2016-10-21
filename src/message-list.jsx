import React from 'react';

export class MessageList extends React.Component {

    static defaultProps = {
        messages: []
    };

    render() {
        return (<h2>Message List Changed</h2>)
    }
}