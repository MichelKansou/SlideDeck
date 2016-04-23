import React from 'react'
import { connect } from 'react-redux'
import { addSlide, deleteSlide, showSlide, editSlide, updateSlide } from '../actions'

import SlidesInput from './SlidesInput'
import SlideList from './SlideList'
import BottomList from './BottomList'
import SlideView from './SlideView'
import EmptyView from './EmptyView'

export default class Main extends React.Component {
    render() {
        const {data, dispatch} = this.props;
        var slideView;
        if (data.selectedSlide.path) {
          slideView = <SlideView viewSelectedSlide={data.selectedSlide}/>;
        } else {
          slideView = <EmptyView/>;
        }
        return (
                <div className="ui stackable two column grid mainGrid">
                     <div className="column slideColumn">
                        <div className="slideGrid">
                            <SlidesInput onChange={e => {
                                    e.preventDefault();
                                    var files = e.target.files || (e.dataTransfer && e.dataTransfer.files);
                                    if (files) {
                                       dispatch(addSlide(files[0].name, files[0].path))
                                    }
                               }}/>
                           <SlideList   data={data.slideData}
                                        selectedSlide={data.selectedSlide}
                                        dispatch={dispatch}
                                        editSlide={editSlide}
                                        deleteSlide={deleteSlide}
                                        showSlide={showSlide}
                                        updateSlide={updateSlide}
                                        />
                           <BottomList />
                       </div>
               </div>
               {slideView}
            </div>
       );
    }
}

function mapStateToProps(data) {
  return {
    data,
  }
}

export default connect(mapStateToProps)(Main)
