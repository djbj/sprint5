import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation-btn">
        <Link to="/admin">
          <button className="blue">Admin</button>
        </Link>

        <Link to="/home">
          <button className="orange">Home
          </button>
        </Link>
      </div>
    )
  }
}
