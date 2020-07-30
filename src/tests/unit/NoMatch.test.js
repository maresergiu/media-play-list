import React from "react"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
import NoMatch from "../../views/NoMatch.jsx"

function renderWithRouter(
  ui,
  {
    routes = ["/", "/error", "/home"],
    history = createMemoryHistory({ initialEntries: routes }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

test("should display the error page", () => {
  const { getByTestId } = renderWithRouter(<NoMatch />)

  const errorPage = getByTestId("error-page")

  expect(errorPage).toBeInTheDocument()
})

test("should display the title", () => {
  const { getByTestId } = renderWithRouter(<NoMatch />)

  const errorPage = getByTestId("error-page"),
    errorPageTitle = getByTestId("sub-title")

  expect(errorPage).toContainElement(errorPageTitle)
})
