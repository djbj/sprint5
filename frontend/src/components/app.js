import React from "react"
import TopicForm from "./topic-form"
import TopicList from "./topic-list"
import DashBoard from "./dashboard"

export default class App extends React.Component {
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
        Find me in src/app.js!
        <TopicForm />
        <TopicList
          topicList={this.state.topicList} />
        <DashBoard
          topicList={this.state.topicList} />
      </div>
    )
  }

}
