import React from "react"
// import Comment from "../comments"
import "./style.css"
import Comment from "../comment"
import CommentForm from "../comment-form"

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    const url = `http://localhost:8080/topics/${this.props.id}/comments`
    fetch(url).then(response => (
      response.json()
    )).then(json => {
      this.setState({ comments: json })
    })
  }

  handleNewComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  render() {
    return (
      <div>
        <div className="topic">
          <h1>{this.props.headline}</h1>
          <p className="content">{this.props.content}</p>
          <p className="userName">{this.props.name}</p>
          <p className="category">{this.props.category}</p>
          <p className="date">{this.props.date}</p>
          <CommentForm
            id={this.props.id}
            handleNewComment={this.handleNewComment}
            newComment={this.props.isAnswered} />
          {this.state.comments.map(comment => (
            <Comment
              comment={comment} />
          ))}
        </div>
      </div>

    )
  }
}
