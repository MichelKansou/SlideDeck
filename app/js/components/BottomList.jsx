import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
$.fn.popup = require ('semantic-ui-popup')
$.fn.transition = require('semantic-ui-transition')

const shell = require('electron').shell;

export default class BottomList extends React.Component {
    componentDidMount(){
        $('.bottomList >> .column').popup({
            inline: true
        });
    }
    render() {
        return (
            <div className="column bottomList">
                <div className="bottomList-grid">
                    <div className="column" data-content="Coming soon" data-position="top center">
                        <i className="big setting icon"></i>
                    </div>
                    <hr/>
                    <div className="column" data-content="View project on Github" data-position="top center">
                        <i className="big github icon" onClick={e => {shell.openExternal('https://github.com/MichelKansou/SlideDeck')}}></i>
                    </div>
                 </div>
            </div>
        );
    }
}
