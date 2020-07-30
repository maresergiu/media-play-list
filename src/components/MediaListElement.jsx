import React, { Component } from "react"
import PropTypes from "prop-types"
import dataFilter from "../helpers/dataFilter"
import YoutubeVideo from "./YoutubeVideo.jsx"

class MediaListElement extends Component {
  state = {
    youtubeId: "",
    showVideo: false,
    ctaLabel: "show",
    pauseVideo: 0,
  }

  setYoutubeId() {
    const youtubeId = this.props.mediaData.src
      ? dataFilter.extractYoutubeId(this.props.mediaData.src.id)
      : this.props.mediaData.src

    this.setState({ youtubeId })
  }

  setPauseYoutubeVideo() {
    const pauseVideo = this.state.pauseVideo + 1

    this.setState({ pauseVideo })
  }

  setCtaLabel() {
    const ctaLabel = this.state.ctaLabel === "show" ? "hide" : "show"
    this.setState({ ctaLabel })
  }

  handleClickToggleVideo() {
    this.setState({ showVideo: !this.state.showVideo })
    this.setCtaLabel()
    this.setPauseYoutubeVideo()
  }

  renderVideo() {
    if (this.props.mediaData.src) {
      return (
        <div
          className={
            this.state.showVideo
              ? "media-list_element-video-holder show"
              : "media-list_element-video-holder"
          }
        >
          <YoutubeVideo
            youtubeId={this.state.youtubeId}
            id={this.props.mediaData.uId}
            playVideoOnLoad={false}
            pauseVideo={this.state.pauseVideo}
            videoVisibility={this.state.showVideo}
          />
        </div>
      )
    }
  }

  renderImgHolder() {
    if (this.props.mediaData.img) {
      return (
        <div
          className="media-list_element-img-holder"
          style={{ backgroundImage: `url(${this.props.mediaData.img})` }}
        >
          {this.state.youtubeId && this.renderVideo()}
        </div>
      )
    }
  }

  render() {
    return (
      <li className="media-list_element">
        {this.renderImgHolder()}

        <h3 data-testid="media-list-element-name" className="sub-title sub-title-sm">
          Name: {this.props.mediaData.name}
        </h3>
        <p data-testid="media-list-element-score" className="text">
          Score: {this.props.mediaData.score}
        </p>
        <p data-testid="media-list-element-details" className="text">
          Details: {this.props.mediaData.text}
        </p>
        <p data-testid="media-list-element-track-id" className="text">
          Track ID: {this.props.mediaData.trackId}
        </p>

        {this.props.mediaData.src && (
          <p data-testid="media-list-element-src" className="text">
            Video url: {this.props.mediaData.src.id}
          </p>
        )}
        {this.props.mediaData.src && (
          <div>
            <button
              data-testid="list-element-cta"
              className="cta"
              onClick={() => this.handleClickToggleVideo()}
            >
              {this.state.ctaLabel} video
            </button>
          </div>
        )}
      </li>
    )
  }

  componentDidMount() {
    this.setYoutubeId()
  }
}

MediaListElement.propTypes = {
  mediaData: PropTypes.object.isRequired,
}

export default MediaListElement
