import React from "react"
import { render } from "@testing-library/react"
import App from "../../App"

test("should contain the home-page", () => {
  const { queryByTestId } = render(<App />)

  const homePage = queryByTestId("home-page")

  expect(homePage).toBeInTheDocument()
})

test("should not contain the error page on load", () => {
  const { queryByTestId } = render(<App />)

  const errorPage = queryByTestId("error-page")

  expect(errorPage).not.toBeInTheDocument()
})
