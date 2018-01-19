import React from "react"
import "./style.css"
import Navigation from "../navigation"
import TopicForm from "../topic-form"
import TopicList from "../topic-list"
import Topic from "../topic"
import Comment from "../comment"
import CommentForm from "../comment-form"

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then(response => (
      response.json()
    )).then(json => {
      this.setState({ topicList: json })
    })
  }

  handleNewTopic = uuu => {
    const topicAdded = uuu
    this.setState({
      topicList: [topicAdded, ...this.state.topicList]
    })
  }

  handleNewComment = isAnswered => {
    const newComment = !isAnswered
    console.log("isAnswered", newComment)
    this.setState({
      topicList: [newComment, ...this.state.topicList]
    })
  }

  render() {
    return (
      <div className="content-container">
        <Navigation />
        <TopicForm
          onNewTopic={this.handleNewTopic} />
        <TopicList
          handleNewComment={this.handleNewComment}
          topicList={this.state.topicList} />
        <Topic />
      </div>
    )
  }
}
