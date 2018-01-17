import React from "react"
// import uuid from "uuid/v4"
import "./style.css"
import Topic from "../topic"

export default class TopicList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TopicList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ TopicList: json })
    })
  }

  render() {
    return (
      <div>
        <section className="topic-list">
          {this.state.TopicList.map(topic => {
            return <Topic
              headline={topic.headline}
              content={topic.content}
              name={topic.name}
              // id={topic._id}
              category={topic.category}
              date={topic.date}
              isAnswered={topic.isAnswered}
              isVisible={topic.isVisible} />
          })}
        </section>
      </div>
    )
  }
}
