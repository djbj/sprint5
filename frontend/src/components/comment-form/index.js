import React from "react"
import "./style.css"

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    let gotId = ""
    if (this.props.id) {
      gotId = this.props.id
    }

    // let gotName = ""
    // if (this.props.name) {
    //   gotName = this.props.name
    // }

    this.state = {
      name: "",
      email: "",
      content: "",
      date: Date.now(),
      isAdmin: false,
      isVisible: false,
      inReplyTo: gotId,
      isAnswered: false
    }
  }

  handleCommentSubmit = event => {
    event.preventDefault()
    this.props.handleNewComment(this.state.isAnswered)
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
          content: ""
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
          onSubmit={this.handleCommentSubmit}>
          <label>
            <h3>Name:</h3>
            <input
              name="name"
              type="text"
              required
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleCommentName} />
          </label>
          <label>
            <h3>Email:</h3>
            <input
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              value={this.state.email}
              onChange={this.handleCommentEmail} />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea
              name="content"
              required
              value={this.state.content}
              placeholder="Write your comment here"
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
