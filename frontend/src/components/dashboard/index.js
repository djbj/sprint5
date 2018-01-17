import React from "react"
// import uuid from "uuid/v4"
import Topic from "../topic"
import "./style.css"

export default class DashBoard extends React.Component {

  render() {
    const unAnsweredCount = this.props.topicList.filter(topic => !topic.isAnswered).length
    return (
      <div>
        <p>Unanswered questions: {unAnsweredCount} </p>
      </div>
    )
  }
}
