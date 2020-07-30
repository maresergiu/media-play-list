import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { setActiveYoutubeVideoId } from "../store/youtube-video/actions"

class YouTubeVideo extends Component {
  state = {
    player: {},
    pauseVideo: 0,
    youtubeVideoState: -1,
  }

  loadVideo = () => {
    let youtubeObj = {
      videoId: this.props.youtubeId,
      events: {
        onStateChange: (data) => this.setYoutubeVideoState(data),
      },
    }

    if (this.props.playVideoOnLoad) youtubeObj.events.onReady = this.onPlayerReady()

    // the Player object is created uniquely based on the id in props
    const player = new window.YT.Player(`${this.props.id}`, youtubeObj)

    this.setState({ player })
  }

  setYoutubeVideoState(videoState) {
    this.setState({ youtubeVideoState: videoState.data })
  }

  onPlayerReady = (event) => {
    event.target.playVideo()
  }

  pauseVideo = () => {
    if (this.state.youtubeVideoState === 1) this.state.player.pauseVideo()
  }

  render = () => {
    return <div id={`${this.props.id}`} />
  }

  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo

      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag && firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else {
      // If script is already there, load the video directly
      this.loadVideo()
    }

    const { watch } = this.props
  }

  componentWillReceiveProps(nextProps) {
    // pause the video at parent request
    if (nextProps.pauseVideo > this.state.pauseVideo) this.pauseVideo()

    // when the video becomes visible set it as the primary video
    if (nextProps.videoVisibility) {
      const id = nextProps.youtubeId

      nextProps.setActiveYoutubeVideoId(id)
    }

    if (nextProps.activeYoutubeVideoId !== nextProps.youtubeId) this.pauseVideo()
  }
}

YouTubeVideo.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  playVideoOnLoad: PropTypes.bool.isRequired,
  pauseVideo: PropTypes.number,
  videoVisibility: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return { activeYoutubeVideoId: state.youtubeVideo.activeYoutubeVideoId }
}

export default connect(mapStateToProps, {
  setActiveYoutubeVideoId,
})(YouTubeVideo)
