import React, { Component } from 'react';
import axios from "axios";

class MediaList extends Component {
    state = {}
    render() {
        return (
            <div>Media List</div>
        );
    }

    async logIn() {
        await axios.get("http://localhost:3001/api/login")
            .then(response => {
                console.log(response.data);
            })
            .catch(e => console.log(e));
    }

    async getHotList() {
        axios.get("http://localhost:3001/api/hot/electro")
            .then(response => {
                console.log(response.data);
            })
            .catch(e => console.log(e));
    }

    async componentDidMount() {
        await this.logIn();
        this.getHotList();

        // axios
        //     .get("https://openwhyd.org/hot/[electro]?format=json")
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(() => {
        //     })
        //     .then(() => {
        //         // hide the loader
        //         // this.setLoaderVisibility(false);
        //     });
    }
}

export default MediaList;