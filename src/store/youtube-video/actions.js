// init loader state
export const youtubeVideoState = {
  activeYoutubeVideoId: "",
}

// actions types
export const SET_ACTIVE_YOUTUBE_VIDEO_ID = "SET_ACTIVE_YOUTUBE_VIDEO_ID"

// action creators
export function setActiveYoutubeVideoId(id) {
  return { type: SET_ACTIVE_YOUTUBE_VIDEO_ID, activeYoutubeVideoId: id }
}
