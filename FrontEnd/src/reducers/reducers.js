import { combineReducers } from 'redux'
import {SWIPE_RIGHT, SWIPE_LEFT } from './actions'


function reduceSwipes(state=[], action) {
  switch (action.type) {
    case SWIPE_RIGHT:  {
      state = {...state, likeList: state.concat[action.url]}
      break;
    }

    case SWIPE_LEFT:{
      state = {...state, dislikeList: state.concat[action.url]}
      break; 
    }
    
  }
  return state

}


export default reduceSwipes