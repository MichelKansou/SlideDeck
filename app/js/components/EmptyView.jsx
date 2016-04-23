import React from 'react'
import ReactDOM from 'react-dom'

export default class EmptyView extends React.Component {
    componentDidMount(){
    }
    render() {
        return (
          <div className="emptyView">
              <div className="container">
                  <i className="huge pointing left icon"></i>
                  <p>Add a new folder that contain your presentation or select one to view it here <i className="big smile icon"></i></p>
                  <p>Make sure on your root folder it contain 'index.html'</p>
              </div>
          </div>
        );
    }
}
