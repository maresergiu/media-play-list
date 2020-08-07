import React from "react"
import { render } from "@testing-library/react"
import App from "../../App"

// I have only written unit tests for the time being due to the short time that we had to spend writting the app
// In a real production env I should write also integration tests and end-to-end tests

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
