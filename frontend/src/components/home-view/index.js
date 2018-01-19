import React from "react"
import "./style.css"
import Navigation from "../navigation"
import TopicForm from "../topic-form"
import Topic from "../topic"

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

  render() {
    return (
      <div className="content-container">
        <Navigation />
        <TopicForm
          onNewTopic={this.handleNewTopic} />

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
      </div>
    )
  }
}
