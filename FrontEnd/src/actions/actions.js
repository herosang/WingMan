/*
 * action types
 */

export const SWIPE_RIGHT = 'SWIPE_RIGHT'
export const SWIPE_LEFT = 'SWIPE_LEFT'

/*
 * action creators
 */

export function swipeRight(url) {
  return { type: SWIPE_RIGHT, url: url }
}


export function swipeLeft(url) {
  return { type: SWIPE_LEFT, url: url }
}