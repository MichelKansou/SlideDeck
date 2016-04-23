import React from 'react'
import ReactDOM from 'react-dom'
import jsonfile from 'jsonfile'
import $ from 'jquery'
$.fn.popup = require ('semantic-ui-popup')
$.fn.transition = require('semantic-ui-transition')

export default class SlideList extends React.Component {
    componentDidMount(){
        $('div.options > i').popup({
            inline: true
        });
    }
    componentDidUpdate(){
        const {data} = this.props;
        jsonfile.writeFileSync(dataBasePath, data, {spaces: 2});
        console.log('data updated :D');
        return true;
    }
    updateSlideData(index, path){
        const {updateSlide, dispatch} = this.props;
        var slidename = $('#slideName'+index).val();
        dispatch(updateSlide(index, slidename, path))
    }
    showEdit(id){
        var slideEdit = $('.edit.'+id)
        if(slideEdit.hasClass('show')){
            slideEdit.removeClass('show');
        }
        else{
            slideEdit.addClass('show');
        }
    }
    slideSelected(key){
        var allSlide = $('.slideContent')
        var slide = $('.slideContent.'+key)
        console.log(slide);
        allSlide.removeClass('active');
        slide.addClass('active');
    }
    render() {
        // Add Path for Edit
        const {data, dispatch, deleteSlide, showSlide, editSlide} = this.props
        var dataList = data.SlideListData.map((slides, index) =>
            <div className={"ui stackable one column grid slideContent "+index} key={index}>
                <div className="column data" onClick={e => { dispatch(showSlide(slides.path)), this.slideSelected(index) }}>
                            <i className="large folder icon"></i>
                            <label>{slides.name}</label>
                </div>
                <div className="column options">
                    <i  className="bordered inverted edit link icon"
                        data-content="Edit" data-position="top center"
                        onClick={e => { dispatch(editSlide(index, slides.name, slides.path)), this.showEdit(index) }}>
                    </i>
                    <i  className="bordered inverted remove link icon"
                        onClick={e => { dispatch(deleteSlide(index)) }}
                        data-content="Remove"
                        data-position="top center">
                    </i>
                </div>
                <div className={"column edit "+index}>
                    <span className="ui input slideConfiguration ">
                        <span>Name: <input  type="text"
                                            id={"slideName"+index}
                                            placeholder="name"
                                            onChange={e => { dispatch(editSlide(index, e.target.value, slides.path)) } } />
                        </span><br/>
                        <div className="ui button save" onClick={e => { this.updateSlideData(index, slides.path) }}>save</div>
                    </span>
                </div>
            </div>
          )
      return (
          <div className="column slideList">
              <div className="container">
                  {dataList}
              </div>
          </div>
      );
    }
}

export default SlideList
