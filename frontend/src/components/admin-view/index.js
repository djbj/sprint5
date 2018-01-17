import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./style.css"
import DashBoard from "../dashboard"
import Topic from "../topic"
import TopicForm from "../topic-form"
import Navigation from "../navigation"

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
          <Topic />
        </main>
        <section>
          <TopicForm />
        </section>
      </div>
    )
  }
}
