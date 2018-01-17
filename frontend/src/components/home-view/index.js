import React from "react"
import uuid from "uuid/v4"
import "style.css"
import AdminView from "../admin-view"
import { BrowserRouter, Route } from "react-router-dom"

import Search from "./search"

export default class HomeView extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </BrowserRouter>

    )
  }
}
