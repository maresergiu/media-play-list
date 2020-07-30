import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MediaListElement from "../../components/MediaListElement.jsx";
import { Provider } from "react-redux"
import store from "../../store/index";
import mockedData from "../../helpers/mockedData";

test("should display the MediaListElement", () => {
    const { container } = render(
        <Provider store={store}>
            <MediaListElement
                mediaData={mockedData.mediaList[0]} />
        </Provider>);

    const mediaListComponent = container.getElementsByClassName("media-list_element");

    expect(mediaListComponent.length).toBe(1);
});

test("should display the name property ", () => {
    const mediaObj = mockedData.mediaList[0],
        { container } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    const nameProperty = container.querySelector("[data-testid=media-list-elemen-name]").innerHTML;

    expect(nameProperty.indexOf(mediaObj.name) > -1).toBe(true);
});

test("should display the score property ", () => {
    const mediaObj = mockedData.mediaList[0],
        { container } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    const scoreProperty = container.querySelector("[data-testid=media-list-elemen-score]").innerHTML;

    expect(scoreProperty.indexOf(`${mediaObj.score}`) > -1).toBe(true);
});

test("should display the details property ", () => {
    const mediaObj = mockedData.mediaList[0],
        { container } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    let detailsProperty = container.querySelector("[data-testid=media-list-elemen-details]").textContent;

    expect(detailsProperty.indexOf(mediaObj.text) > -1).toBe(true);
});

test("should display the track-id property ", () => {
    const mediaObj = mockedData.mediaList[0],
        { container } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    const trackIdProperty = container.querySelector("[data-testid=media-list-elemen-track-id]").textContent;

    expect(trackIdProperty.indexOf(mediaObj.trackId) > -1).toBe(true);
});

test("should display the src property ", () => {
    const mediaObj = mockedData.mediaList[3],
        { container } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    const srcProperty = container.querySelector("[data-testid=media-list-elemen-src]").textContent;

    expect(srcProperty.indexOf(mediaObj.src.id) > -1).toBe(true);
});

test("should display the cta if src prop is set", () => {
    const mediaObj = mockedData.mediaList[3],
        { container } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    const srcProperty = container.querySelector(".cta").textContent;

    expect(srcProperty.indexOf("show") > -1).toBe(true);
});

test("should change the text value of the cta if a click event happens", () => {
    const mediaObj = mockedData.mediaList[3],
        { container, getByTestId } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    let srcProperty = container.querySelector(".cta").textContent;

    expect(srcProperty.indexOf("show") > -1).toBe(true);

    fireEvent.click(getByTestId("list-element-cta"));

    srcProperty = container.querySelector(".cta").textContent;

    expect(srcProperty.indexOf("hide") > -1).toBe(true);
});

test("should add the `active` to the `media-list_element-video-holder` when cta has text value `hide video`", () => {
    const mediaObj = mockedData.mediaList[3],
        { container, getByTestId } = render(
            <Provider store={store}>
                <MediaListElement
                    mediaData={mediaObj} />
            </Provider>);

    fireEvent.click(getByTestId("list-element-cta"));

    let srcProperty = container.querySelector(".cta").textContent;

    expect(srcProperty.indexOf("hide") > -1).toBe(true);

    const videoHolder = container.querySelector('.media-list_element-video-holder').className;

    expect(videoHolder.indexOf("show") > -1).toBe(true);
});