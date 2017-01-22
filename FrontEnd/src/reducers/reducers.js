import { combineReducers } from 'redux';
import {SWIPE_RIGHT, SWIPE_LEFT } from './actions';


function reduceSwipes(state={}, action) {
  switch (action.type) {
    case SWIPE_RIGHT:  {
      state = {...state, likeList: state.likeList.concat[action.url], index: state.index++};
      break;
    }

    case SWIPE_LEFT:{
      state = {...state, dislikeList: state.dislikeList.concat[action.url]};
      break; 
    }

    case POPULATE:{
      state = {...state, fetching: true, index: 0};
      break;
    }

    case POPULATE_DONE:{
      state = {...state, fetching: false, current: action.payload};
      break;
    }
  }

  return state;

}


export default reduceSwipes