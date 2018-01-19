import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="buttons">
        <button className="admin">
          <Link to="/admin">Admin</Link>
        </button>
        <button className="home">
          <Link to="/home">Home</Link>
        </button>
      </div>
    )
  }
}
