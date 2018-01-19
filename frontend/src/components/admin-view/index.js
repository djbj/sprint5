import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./style.css"
import DashBoard from "../dashboard"
import Topic from "../topic"
import Navigation from "../navigation"
// // import CommentForm from "../comment-form"
import Comment from "../comment"
// import TopicList from "../topic-list"

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
      <div className="content-container">
        <aside>
          <Navigation />
          <DashBoard
            topicList={this.state.topicList} />
        </aside>
        <main>
          <section className="topic-list">
            {this.state.topicList.map(topic => (
              <Topic
                headline={topic.headline}
                content={topic.content}
                name={topic.name}
                id={topic._id}
                category={topic.category}
                date={topic.date}
                isAnswered={topic.isAnswered}
                isVisible={topic.isVisible} />
            ))}
          </section>
        </main>
        <section>
          {/* <CommentForm /> */}
        </section>
      </div>
    )
  }
}
