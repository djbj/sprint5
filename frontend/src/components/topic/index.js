import React from "react"
import "./style.css"

export default class Topic extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <p className="content">{this.props.content}</p>
        <p className="userName">{this.props.name}</p>
        <p className="category">{this.props.category}</p>
        <p className="date">{this.props.date}</p>
        {this.props.isAnswered}
      </div>
    )
  }
}
