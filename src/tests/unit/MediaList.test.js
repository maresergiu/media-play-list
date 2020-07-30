import React from "react"
import { render } from "@testing-library/react"
import MediaList from "../../components/MediaList.jsx"
import { Provider } from "react-redux"
import store from "../../store/index"
import mockedData from "../../helpers/mockedData"

test("should display the MediaList", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MediaList mediaList={mockedData.mediaList} />
    </Provider>
  )

  const mediaListComponent = getByTestId("media-list")

  expect(mediaListComponent).toBeInTheDocument()
})

test("should hold the MediaListElement", async () => {
  const { container } = render(
    <Provider store={store}>
      <MediaList mediaList={mockedData.mediaList} />
    </Provider>
  )

  let mediaListElement = null

  mediaListElement = container.querySelectorAll(".media-list_element")

  expect(mediaListElement !== null).toBe(true)
})

test("should display all the elements from the array", () => {
  const { container } = render(
    <Provider store={store}>
      <MediaList mediaList={mockedData.mediaList} />
    </Provider>
  )

  const mediaListElement = container.querySelectorAll("li")

  expect(mediaListElement.length === 20).toBe(true)
})

test("should display the title", () => {
  const { container, getByTestId } = render(
    <Provider store={store}>
      <MediaList title="Test title" mediaList={mockedData.mediaList} />
    </Provider>
  )

  const mediaListComponent = getByTestId("media-list"),
    subTitle = getByTestId("media-list-sub-title")

  expect(mediaListComponent).toContainElement(subTitle)
})

test("should display the title with the value `Test title list`", () => {
  const { container } = render(
    <Provider store={store}>
      <MediaList title="Test title" mediaList={mockedData.mediaList} />
    </Provider>
  )

  const subTitle = container.querySelector("[data-testid=media-list-sub-title]")
    .innerHTML

  expect(subTitle).toBe("Test title list")
})
