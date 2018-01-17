import React from "react"
import uuid from "uuid/v4"
import "style.css"


export default class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      content: "",
      date: "",
      isAdmin: false,
      isVisible: false,
      // inReplyTo: { type:mongoose.Schema.Types.ObjectId, ref:"Topic"}
      replyTo: ""
    }
  }
  render() {
    return (
      <div>
        <form
          className="topic-form"
          onSubmit={this.handleSubmit}>
          <label>
            <h3>Name:</h3>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleName} />
          </label>
          <label>
            <h3>Email:</h3>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleEmail} />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleContent} />
          </label>
          <button
            type="submit">Submit
          </button>
        </form>
    </div>
    )
  }
}
