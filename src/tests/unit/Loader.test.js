import React from "react"
import { render } from "@testing-library/react"
import Loader from "../../components/Loader.jsx"
import { Provider } from "react-redux"
import { showLoader } from "../../store/loader/actions"
import store from "../../store/index"

test("should display the Loader", () => {
  const { getByTestId, container } = render(
    <Provider store={store}>
      <Loader />
    </Provider>
  )

  const loaderComponent = getByTestId("loader")

  expect(loaderComponent).toBeInTheDocument()
})

test("should add the active class if store action is triggered", async () => {
  const { getByTestId, container } = render(
    <Provider store={store}>
      <Loader />
    </Provider>
  )

  const initloaderComponent = getByTestId("loader"),
    initLoaderCSSClasses = initloaderComponent.className

  expect(initloaderComponent).toBeInTheDocument()
  expect(initLoaderCSSClasses === "loader").toBe(true)

  await store.dispatch(showLoader())

  const dispatchedLoaderComponent = getByTestId("loader"),
    dispatchedLoaderCssClasses = dispatchedLoaderComponent.className

  expect(dispatchedLoaderComponent).toBeInTheDocument()
  expect(dispatchedLoaderCssClasses === "loader active").toBe(true)
})
