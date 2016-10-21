import React from 'react';

export class Message extends React.Component {

    static defaultProps = {
        message: []
    };

    render() {
        return (<h2>Message</h2>)
    }
}