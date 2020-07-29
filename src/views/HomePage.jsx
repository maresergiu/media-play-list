import React, { Component } from "react";
import { connect } from "react-redux";
import { showLoader, hideLoader } from "../store/loader/actions";
import openwwhydMethods from "../helpers/openwwhyd";
import GlobalComponents from "../components/GlobalComponents.jsx";
import MediaList from "../components/MediaList.jsx";

class HomePage extends Component {
    state = {
        mediaList: [],
        httpStatus: "",
        httpMessage: "Please bear with us until we receive the data."
    }

    render() {
        return (
            <div className="home-page">
                <div className="holder">
                    <h2 className="sub-title">Home page!</h2>
                    <p className="text">{this.httpMessage}</p>
                    <MediaList
                        title="Electro"
                        mediaList={this.state.mediaList} />
                </div>
                <GlobalComponents />
            </div>
        );
    }

    async componentDidMount() {
        this.setState({ httpMessage: "Please bear with us until we receive the data." })
        this.props.showLoader();

        const logInResult = await openwwhydMethods.logIn();
        const hotListResult = await openwwhydMethods.getHotList('electro');

        this.props.hideLoader();

        if (logInResult.data && hotListResult.data) {
            this.setState({ mediaList: hotListResult.data.tracks })
            this.setState({ httpStatus: "success" })
            this.setState({ httpMessage: "" });
        } else {
            this.setState({ httpStatus: "error" })
            this.setState({ httpMessage: "Something went wrong. Please refresh the browser." })
        }
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    showLoader,
    hideLoader
})(HomePage);