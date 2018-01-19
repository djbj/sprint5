import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
// import TopicForm from "./topic-form"
// import TopicList from "./topic-list"
// import DashBoard from "./dashboard"
import Header from "./header"
import HomeView from "./home-view"
import AdminView from "./admin-view"

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/home" component={HomeView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </BrowserRouter>
    )
  }

}
