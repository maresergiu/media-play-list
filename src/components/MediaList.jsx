import React, { Component } from "react"
import PropTypes from "prop-types"
import MediaListElement from "./MediaListElement.jsx"
import "../scss/components/media-list.scss"

class MediaList extends Component {
  render() {
    return (
      <div data-testid="media-list">
        <h2
          className="sub-title"
          data-testid="media-list-sub-title">{this.props.title} list</h2>
        <ul>
          {this.props.mediaList.map((el) => {
            return <MediaListElement key={el._id} mediaData={el} />
          })}
        </ul>
      </div>
    )
  }
}

MediaList.propTypes = {
  title: PropTypes.string,
  mediaList: PropTypes.array.isRequired,
}

export default MediaList
