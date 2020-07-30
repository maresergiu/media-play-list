import {
    SET_ACTIVE_YOUTUBE_VIDEO_ID,
    youtubeVideoState
} from "./actions";

const initialState = { ...youtubeVideoState };

function youtubeVideoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_YOUTUBE_VIDEO_ID:
            return Object.assign({}, state, {
                activeYoutubeVideoId: action.activeYoutubeVideoId
            })
        default:
            return state
    }
}

export default youtubeVideoReducer;