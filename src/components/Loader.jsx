import React from 'react';
import { connect } from "react-redux";
import "../scss/components/loader.scss";

const loaderClass = loaderVisibility => loaderVisibility ? "loader active" : "loader";

const Loader = ({ loaderVisibility }) => {
    return (
        <div className={loaderClass(loaderVisibility)}>
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
        </div>
    );
}

const mapStateToProps = state => {
    return { loaderVisibility: state.loader.loaderVisbility }
}

export default connect(mapStateToProps)(Loader);
