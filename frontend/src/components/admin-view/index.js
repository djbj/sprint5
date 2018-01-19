import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./style.css"
import DashBoard from "../dashboard"
import Topic from "../topic"
import Navigation from "../navigation"
// // import CommentForm from "../comment-form"
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

  handleNewComment = isAnswered => {
    const newComment = !isAnswered
    console.log("isAnswered", newComment)
    this.setState({
      topicList: [newComment, ...this.state.topicList ]
    })
  }

  render() {
    return (
      <div className="content-container">
        <aside>
          <Navigation />
          <DashBoard
            topicList={this.state.topicList} />
        </aside>
        <main>
          <TopicList
            handleNewComment={this.handleNewComment}
            topicList={this.state.topicList} />
          <Topic />
        </main>
        <section>
          {/* <CommentForm /> */}
        </section>
      </div>
    )
  }
}
