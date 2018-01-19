import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation-btn">
        <button className="blue">
          <Link to="/admin">Admin</Link>
        </button>
        <button className="orange">
          <Link to="/home">Home</Link>
        </button>
      </div>
    )
  }
}
