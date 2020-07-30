const extractYoutubeId = (url) => {
  const urlArray = typeof url === "string" ? url.split("=") : url,
    index = urlArray.length > 1 ? 1 : 0

  return urlArray[index]
}

export default {
  extractYoutubeId,
}
