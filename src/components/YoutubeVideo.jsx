import PropTypes from 'prop-types';
import React from 'react';

class YouTubeVideo extends React.PureComponent {
    loadVideo = () => {
        let youtubeObj = {
            videoId: this.props.youtubeId,
            events: {}
        }

        if (this.props.playVideoOnLoad) youtubeObj.events.onReady = () => this.onPlayerReady();

        // the Player object is created uniquely based on the id in props
        this.player = new window.YT.Player(`${this.props.id}`, youtubeObj);
    };

    onPlayerReady = event => {
        event.target.playVideo();
    };

    render = () => {
        return (
            <div id={`${this.props.id}`} />
        );
    };

    componentDidMount = () => {
        // On mount, check to see if the API script is already loaded
        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = this.loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        } else { // If script is already there, load the video directly
            this.loadVideo();
        }
    };
}

YouTubeVideo.propTypes = {
    youtubeId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default YouTubeVideo;