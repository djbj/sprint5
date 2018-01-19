import React from "react"
// import uuid from "uuid/v4"
import "./style.css"
import Topic from "../topic"

export default class TopicList extends React.Component {

  render() {
    return (
      <div>
        <section className="topic-list">
          {this.props.topicList.map(topic => {
            return <div><Topic
              headline={topic.headline}
              content={topic.content}
              name={topic.name}
              id={topic._id}
              category={topic.category}
              date={topic.date}
              isAnswered={topic.isAnswered}
              isVisible={topic.isVisible} />
            </div>
          })}
        </section>
      </div>
    )
  }
}
