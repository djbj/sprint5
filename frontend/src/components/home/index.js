import React from "react"
import uuid from "uuid/v4"
import "style.css"

import Search from "./search"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}
