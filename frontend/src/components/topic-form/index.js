import React from "react"
import uuid from "uuid/v4"
import "./style.css"

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      headline: "",
      content: "",
      category: "",
      date: Date.now(),
      isAnswered: false,
      isVisible: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewTopic(this.state)
    fetch("http://localhost:8080/faq", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          name: "",
          email: "",
          headline: "",
          content: ""
        })
      } else {
        // it was invalid...
      }
    }).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleHeadline = event => {
    this.setState({
      headline: event.target.value
    })
  }

  handleContent = event => {
    this.setState({
      content: event.target.value
    })
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
            <h3>Topic:</h3>
            <input
              name="headline"
              type="text"
              value={this.state.headline}
              onChange={this.handleHeadline} />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleContent} />
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
