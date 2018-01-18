import React from "react"
import "./style.css"
import Comment from "../comments"

export default class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/comments").then(response => (
      response.json()
    )).then(json => {
      this.setState({ commentList: json })
    })
  }

  render() {
    return (
      <div>
        <section className="comment-list">
          {this.props.commentList.map(comment => {
            return <div><Comment
              name={comment.name}
              email={comment.email}
              content={comment.content}
              date={comment.date}
              isAdmin={comment.isAdmin}
              isVisible={comment.isVisible}
              id={comment.inReplyTo} />
            </div>
          })}
        </section>

      </div>
    )
  }
}
