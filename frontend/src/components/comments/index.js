import React from "react"
import "./style.css"

export default class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      content: "",
      date: Date.now(),
      isAdmin: false,
      isVisible: false,
      // inReplyTo: { type:mongoose.Schema.Types.ObjectId, ref:"Topic"}
      replyTo: "",
      isAnswered: false
    }
  }

  handleCommentSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.ok) {
        this.setState({
          name: "",
          email: "",
          content: "",
          isAnswered: true
        })
      } else {
        // validation error
      }
    })
  }

  handleCommentName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleCommentEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleCommentContent = event => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          className="comment-form"
          onSubmit={this.handleCommentSubmit}
          value={this.state.isAnswered}>
          <label>
            <h3>Name:</h3>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleCommentName} />
          </label>
          <label>
            <h3>Email:</h3>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleCommentEmail} />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleCommentContent} />
          </label>
          <br />
          <button
            type="submit">Submit
          </button>
        </form>
      </div>
    )
  }
}
