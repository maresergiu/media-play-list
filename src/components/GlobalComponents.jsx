import React from "react"
import Loader from "./Loader.jsx"

// all the global components are going to be placed here
const GlobalComponents = () => {
  return (
    <React.Fragment>
      <div data-testid="global-components">
        <Loader />
      </div>
    </React.Fragment>
  )
}

export default GlobalComponents
