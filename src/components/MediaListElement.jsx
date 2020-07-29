import React, { Component } from 'react';
import PropTypes from "prop-types";
import dataFilter from "../helpers/dataFilter";
import YoutubeVideo from "./YoutubeVideo.jsx";

class MediaListElement extends Component {
    state = {
        youtubeId: "",
        showVideo: false,
        ctaLabel: "show"
    }

    renderVideo() {
        console.log('render video')
        if (this.props.mediaData.src) {
            return (
                <div className={this.state.showVideo ? "media-list_element-video-holder show" : "media-list_element-video-holder"}>
                    <YoutubeVideo youtubeId={this.state.youtubeId} id={this.props.mediaData.uId} playVideoOnLoad={false} />
                </div>
            )
        }
    }

    renderImgHolder() {
        if (this.props.mediaData.img) {
            return (
                <div className="media-list_element-img-holder" style={{ backgroundImage: `url(${this.props.mediaData.img})` }}>
                    {
                        this.state.youtubeId && this.renderVideo()
                    }
                </div>
            )
        }
    }

    setYoutubeId() {
        const youtubeId = this.props.mediaData.src ? dataFilter.extractYoutubeId(this.props.mediaData.src.id) : this.props.mediaData.src;

        this.setState({ youtubeId });
    }

    handleClickToggleVideo() {
        this.setState({ showVideo: !this.state.showVideo })
        this.setState({ ctaLabel: "hide" })
    }

    render() {
        return (
            <li className="media-list_element">
                {
                    this.renderImgHolder()
                }

                <h3 className="sub-title sub-title-sm">Name: {this.props.mediaData.name}</h3>
                <p className="text">Score: {this.props.mediaData.score}</p>
                <p className="text">Details: {this.props.mediaData.text}</p>
                <p className="text">Track ID: {this.props.mediaData.trackId}</p>
                {
                    this.props.mediaData.src
                    &&
                    <p className="text">Video url: {this.props.mediaData.src.id}</p>
                }
                {
                    this.props.mediaData.src
                    &&
                    <div>
                        <button className="cta" onClick={() => this.handleClickToggleVideo()}>{this.state.ctaLabel} video</button>
                    </div>
                }
            </li>
        );
    }

    componentDidMount() {
        this.setYoutubeId()
    }
}

MediaListElement.propTypes = {
    mediaData: PropTypes.object.isRequired
}

export default MediaListElement;