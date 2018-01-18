import React from "react"
import "./style.css"

export default class Comment extends React.Component {

  render() {
    return (
        <div className="comment">
          <p className="name">{this.props.name}</p>
          <p className="email">{this.props.email}</p>
          <p className="content">{this.props.content}</p>
          <p className="date">{this.props.date}</p>
        </div>
      )
    }
}
