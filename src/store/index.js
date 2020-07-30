import { createStore, combineReducers } from "redux"
import loaderReducer from "./loader/reducer"
import youtubeVideoReducer from "./youtube-video/reducer"

const allReducers = combineReducers({
  loader: loaderReducer,
  youtubeVideo: youtubeVideoReducer,
})

const store = createStore(allReducers)

export default store
