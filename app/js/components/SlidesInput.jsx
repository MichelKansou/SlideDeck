import React from 'react'
import ReactDOM from 'react-dom'

export default class SlideInput extends React.Component {
    componentDidMount(){
        var input = ReactDOM.findDOMNode(this.refs.customAttributes)
            input.setAttribute('multiple', '')
            input.setAttribute('webkitdirectory', '')
    }
    render() {
        const {onChange} = this.props;
        return (
          <div className="column slideInput">
              <label htmlFor="importSlide" className="ui icon button importSlide">
                <i className="plus icon"></i>
                Add New Folder</label>
            <input type="file" id="importSlide" ref='customAttributes' onChange={onChange} />
          </div>
        );
    }
}
