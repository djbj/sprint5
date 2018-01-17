import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <button>
          <Link to="/admin">Admin</Link>
        </button>
        <button>
          <Link to="/home">Home</Link>
        </button>
      </div>
    )
  }
}
