/*
 * action types
 */

export const SWIPE_RIGHT = 'SWIPE_RIGHT'
export const SWIPE_LEFT = 'SWIPE_LEFT'
export const SEND = 'SEND'
export const SEND_DONE = 'SEND_DONE'
export const POPULATE = 'POPULATE'
export const POPULATE_DONE = 'POPULATE_DONE'

/*
 * action creators
 */

export function swipeRight(url) {
  return { type: SWIPE_RIGHT, payload: url }
}


export function swipeLeft(url) {
  return { type: SWIPE_LEFT, payload: url }
}


export function startPopulate() {
  //api call
  return { type: POPULATE, payload: none }
}


export function endPopulate(current) {
  return { type: POPULATE_DONE, payload: current }
}

export function send(){
  //api call
  return { type: SEND, payload: null }
}

export function endSend(){
  return { type: SEND_DONE, payload: null }

}