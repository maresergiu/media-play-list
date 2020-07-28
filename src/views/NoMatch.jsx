import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoMatch extends Component {
    render() {
        return (
            <div className="error">
                <div className="holder">
                    <h2 className="sub-title">This is on our side and it's fine! It does happen to get lost.</h2>
                    <p>Now let's work together to get you back on track!.</p>
                    <p>
                        Please click
                        <Link to="/">here</Link>, and let's go to the home page!
                    </p>
                </div>
            </div>
        );
    }
}

export default NoMatch;