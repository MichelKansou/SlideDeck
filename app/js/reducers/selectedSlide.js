import Immutable from 'immutable'
import update from 'react-addons-update'

const selectedState = new Immutable.Map({SlideListData:[]});

export default function selectedSlide (state = selectedState, action) {
  switch(action.type) {
    case 'showSlide':
        console.log('slide selected')
        return Object.assign({}, state, {
              path: action.path
            })
    case 'editSlide':
        return Object.assign({}, state, {
                 SlideListData:[
                     {
                         index: action.index,
                         name: action.name,
                         path: action.path,
                     }
                 ]
            })
    case 'editSlidePath':
        console.log('editing slide path')
        return Object.assign({}, state, {
              editPath: action.path
            })
    default:
        return state
  }
}
