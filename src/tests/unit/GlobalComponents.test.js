import React from "react"
import { render } from "@testing-library/react"
import GlobalComponents from "../../components/GlobalComponents.jsx"
import { Provider } from "react-redux"
import store from "../../store/index"

test("should display the GlobalComponents", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <GlobalComponents />
    </Provider>
  )

  const globalComponents = getByTestId("global-components")

  expect(globalComponents).toBeInTheDocument()
})

test("should display the Loader component inside GlobalComponents", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <GlobalComponents />
    </Provider>
  )

  const globalComponents = getByTestId("global-components"),
    loader = getByTestId("loader")

  expect(globalComponents).toContainElement(loader)
})
