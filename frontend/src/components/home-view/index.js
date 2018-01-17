import React from "react"
import uuid from "uuid/v4"
import "./style.css"
import { BrowserRouter, Route } from "react-router-dom"
import AdminView from "../admin-view"
import Navigation from "../navigation"
import TopicForm from "../topic-form"
import TopicList from "../topic-list"

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ topicList: json })
    })
  }

  render() {
    return (
        <div>
          <Navigation />
          <TopicForm />
          <TopicList
            topicList={this.state.topicList} />
            {/* <DashBoard
              topicList={this.state.topicList} /> */}
        </div>

    )
  }
}
