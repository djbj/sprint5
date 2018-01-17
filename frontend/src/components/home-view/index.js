import React from "react"
import uuid from "uuid/v4"
import "./style.css"
import { BrowserRouter, Route } from "react-router-dom"
import AdminView from "../admin-view"
import Navigation from "../navigation"
import TopicForm from "../topic-form"
import TopicList from "../topic-list"
import Topic from "../topic"

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

  forceUpdate = (updatedList) => {
    this.setState({topicList: updatedList})
    // this.setState({ topicList: json })
    console.log("forceUpdate")
  }

  render() {
    return (
        <div>
          <Navigation />
          <TopicForm
            blabla={this.forceUpdate} />
          <TopicList
            topicList={this.state.topicList} />
          <Topic />
        </div>

    )
  }
}
