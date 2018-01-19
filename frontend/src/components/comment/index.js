import React from "react"
import "./style.css"

export default class Comment extends React.Component {

  render() {
    return (
        <div className="comment">
          <p className="content">{this.props.comment.content}</p>
          <p className="userName">{this.props.comment.name}</p>
          <p className="userName">{this.props.comment.email}</p>
          {/* <p className="date">{this.props.comment.date}</p> */}
        </div>
      )
    }
}
