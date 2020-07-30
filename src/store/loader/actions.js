// init loader state
export const loaderState = {
  loaderVisbility: false,
}

// actions types
export const HIDE_LOADER = "HIDE_LOADER"
export const SHOW_LOADER = "SHOW_LOADER"

// action creators
export function showLoader() {
  return { type: SHOW_LOADER, loaderVisbility: true }
}

export function hideLoader() {
  return { type: HIDE_LOADER, loaderVisbility: false }
}
