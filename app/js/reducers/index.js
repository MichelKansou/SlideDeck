import { combineReducers } from 'redux'
import slideData from './slideData'
import selectedSlide from './selectedSlide'

export default combineReducers({
  slideData,
  selectedSlide
})
