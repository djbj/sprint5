import React from "react"
import "./style.css"
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

  handleNewTopic = uuu => {
    const topicAdded = uuu
    this.setState({
      topicList: [topicAdded, ...this.state.topicList]
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <TopicForm
          onNewTopic={this.handleNewTopic} />
        <TopicList
          topicList={this.state.topicList} />
        {/* <DashBoard
          topicList={this.state.topicList} /> */}
        <Topic />
      </div>
    )
  }
}
