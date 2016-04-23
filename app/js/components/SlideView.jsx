import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
$.fn.popup = require ('semantic-ui-popup')
$.fn.transition = require('semantic-ui-transition')

var webviewStyle = {
    height:'100%',
    width: '100%'
};

export default class SlideView extends React.Component {
    componentDidMount(){
        $('.slideViewColumn > i.icon').popup({
            inline: true
        });
    }
    EnterFullScreen() {
        var webview = document.getElementById("slideView");
        var requestFullscreen = function (ele) {
            if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
                console.log('Fullscreen supported :D');
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };
        webview.executeJavaScript(requestFullscreen(webview), false);
    }
    render() {
          return (
              <div className="column slideViewColumn">
                    <i  className="circular inverted big maximize link icon"
                        data-content="FullScreen"
                        data-position="top center"
                        onClick={this.EnterFullScreen}>
                    </i>
                    <webview id="slideView" src={this.props.viewSelectedSlide.path+"/index.html"} autosize="on" style={webviewStyle}></webview>
              </div>
          );
    }
}
