import React from "react"
import { connect } from "react-redux"
import "../scss/components/loader.scss"
import PropTypes from "prop-types"

const loaderClass = (loaderVisibility) =>
  loaderVisibility ? "loader active" : "loader"

const Loader = ({ loaderVisibility }) => {
  return (
    <div data-testid="loader" className={loaderClass(loaderVisibility)}>
      <div className="loader-circle"></div>
      <div className="loader-circle"></div>
    </div>
  )
}

Loader.propTypes = {
  loaderVisibility: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return { loaderVisibility: state.loader.loaderVisbility }
}

export default connect(mapStateToProps)(Loader)
