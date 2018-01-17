import React from "react"
import "./style.css"

export default class Topic extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <p>{this.props.content}</p>
        <p>{this.props.date}</p>
        <p>{this.props.category}</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
