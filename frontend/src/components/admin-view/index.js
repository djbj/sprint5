import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./style.css"
import DashBoard from "../dashboard"
import Topic from "../topic"
import Navigation from "../navigation"
import Comment from "../comments"
import TopicList from "../topic-list"

export default class AdminView extends React.Component {
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
        <aside>
          <Navigation />
          <DashBoard
            topicList={this.state.topicList} />
        </aside>
        <main>
          <TopicList
            topicList={this.state.topicList} />
          <Topic />
        </main>
        <section>
          <Comment />
        </section>
      </div>
    )
  }
}
