import React, { Component } from 'react';
import PropTypes from "prop-types";
import MediaListElement from "./MediaListElement.jsx";
import "../scss/components/media-list.scss";

class MediaList extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.title} list</h2>
                <ul>
                    {this.props.mediaList.map(el => {
                        return <MediaListElement key={el._id} mediaData={el} />
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

MediaList.propTypes = {
    mediaList: PropTypes.array.isRequired
}

export default MediaList;