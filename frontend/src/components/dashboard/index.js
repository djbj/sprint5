import React from "react"
import "./style.css"

export default class DashBoard extends React.Component {

  render() {
    const unAnsweredCount = this.props.topicList.filter(topic => !topic.isAnswered).length
    return (
      <div>
        <h4>Total questions: {unAnsweredCount} </h4>
        <hr />
      </div>
    )
  }
}
