import { HIDE_LOADER, SHOW_LOADER, loaderState } from "./actions"

const initialState = { ...loaderState }

function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_LOADER:
      return Object.assign({}, state, {
        loaderVisbility: false,
      })
    case SHOW_LOADER:
      return Object.assign({}, state, {
        loaderVisbility: true,
      })
    default:
      return state
  }
}

export default loaderReducer
