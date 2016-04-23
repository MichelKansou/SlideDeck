import Immutable from 'immutable'
import update from 'react-addons-update'

// reduxDataBase defined in index.html because of webpack -_-

export default function slideData (state = reduxDataBase, action) {
  switch(action.type) {
    case 'addSlide':
    console.log('slide added')
    return {
         SlideListData:[
          ...state.SlideListData,
          {
            name: action.name,
            path: action.path
          }
        ]
        }
    case 'deleteSlide':
        console.log('slide removed')
        return {
             SlideListData:[
             ...state.SlideListData.slice(0, action.index),
             ...state.SlideListData.slice(action.index + 1)
            ]
            }
    case 'updateSlide':
        console.log('slide updated')
        console.log(state.SlideListData)
        return {
             SlideListData:
                state.SlideListData.map((todo, index) => {
                  if (index === action.index) {
                    // Copy the object before mutating
                    return Object.assign({}, todo, {
                      name: action.name
                    })
                  }
                  return todo
                })
        }
    default:
        return state
  }
}
