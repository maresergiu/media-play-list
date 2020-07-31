import React from "react"
import { render } from "@testing-library/react"
import App from "../../App"

// due to the fact the I have written tests only for Vue.js apps until now
// this application gived me the ooportunity to write tests also for React.js

// this application brought a certain level of complexity as I had to learn the library very fast
// and write unit tests with it

// I have only written unit tests for the time being due to the short time that we had to spend writting the app
// in a real production env I should write also integration tests and end-to-end tests

// I hope you like my tests :)

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
