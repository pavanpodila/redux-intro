import React from 'react';
import {connect} from 'react-redux';
import {selectFolder, setLoading, loadMessages} from './store/action-creators';
import {mockMessages} from './store/mock-data';

function View({folders, selected, onFolderSelect}) {
    return (
        <div className="list-group">
            {
                folders.map(folder => (
                    <a href="#"
                       className={`list-group-item list-group-item-action ${(selected === folder.name) ? 'active' : ''}`}
                       key={folder.name}
                       onClick={() => onFolderSelect(folder.name)}>
                        <span className="tag tag-default tag-pill float-xs-right">{folder.count}</span>
                        <span className="text-uppercase">{folder.name}</span>
                    </a>
                ))
            }
        </div>
    );
}

export const FolderList = connect(mapStateToProps, mapDispatchToProps)(View);


function mapStateToProps({mailbox: {folders, selection}}) {
    return {
        folders: folders.map(folder => {
            return {
                name: folder,
                count: mockMessages[folder].length
            };
        }),
        selected: selection.folder
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFolderSelect(folder) {
            dispatch(selectFolder(folder));

            dispatch(setLoading(true));

            setTimeout(() => {
                dispatch(loadMessages(mockMessages[folder]));
                dispatch(setLoading(false));
            }, 500);

        }
    };
}