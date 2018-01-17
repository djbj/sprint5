import React from "react"
import uuid from "uuid/v4"
import "style.css"
import { BrowserRouter, Route } from "react-router-dom"
import AdminView from "../admin-view"
import Navigation from "../navigation"

export default class HomeView extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={HomeView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </BrowserRouter>

    )
  }
}
