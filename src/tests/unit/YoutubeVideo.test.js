import React from "react";
import { render, screen } from "@testing-library/react";
import MediaList from "../../components/MediaList.jsx";
import { Provider } from "react-redux"
import store from "../../store/index";
import mockedData from "../../helpers/mockedData";

test("should display the MediaList", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <MediaList
                mediaList={mockedData.mediaList} />
        </Provider>);

    const mediaListComponent = getByTestId("media-list");

    expect(mediaListComponent).toBeInTheDocument();
});