import React, {Component} from "react";
import {MessageList} from "./message-list";
import {FolderList} from "./folder-list";
import {Message} from "./message";
import logo from './assets/logo.svg';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30"
                             className="d-inline-block align-top" alt=""/>
                        Redux Inbox
                    </a>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <FolderList />
                        </div>
                        <div className="col-sm-3">
                            <MessageList />
                        </div>
                        <div className="col-sm-6">
                            <Message />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
