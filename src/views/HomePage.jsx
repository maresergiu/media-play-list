import React, { Component } from 'react';
import GlobalComponents from "../components/GlobalComponents.jsx";
import MediaList from "../components/MediaList.jsx";

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="holder">
                    <h2 className="sub-title">Home page!</h2>
                    <MediaList />
                </div>
                <GlobalComponents />
            </div>
        );
    }
}

export default HomePage;