import { combineReducers } from 'redux';
import {SWIPE_RIGHT, SWIPE_LEFT, POPULATE, POPULATE_DONE, SEND, SEND_END } from '../actions/actions.js';


function reduceSwipes(state={
    fetching: false,
    likeList: [],
    dislikeList:[],
    index: -1,
    curent: [],
  }, action) {


  switch (action.type) {
    case SWIPE_RIGHT:  {
      state = {...state, likeList: state.likeList.concat[action.payload], index: state.index++};
      break;
    }

    case SWIPE_LEFT:{
      state = {...state, dislikeList: state.dislikeList.concat[action.payload], index: state.index++};
      break; 
    }

    case POPULATE:{
      state = state;
      break;
    }

    case POPULATE_DONE:{
      state = {...state, fetching: false, current: action.payload, index: 0};
      break;
    }

    case SEND:{
      state = {...state, fetching: true, index: 0};
    }

    case SEND_END:{
      state = state;
    }
  }

  return state;

}


export default reduceSwipes