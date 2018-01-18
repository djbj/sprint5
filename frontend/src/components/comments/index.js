import React from "react"
import "./style"

export default class Comment extends React.Component {


  render() {
    return (
        <div className="comment">
          <p className="name">{this.props.name}</p>
          <p className="email">{this.props.email}</p>
          <p className="content">{this.props.conent}</p>
          <p className="date">{this.props.date}</p>
        </div>
      )
    }
}
