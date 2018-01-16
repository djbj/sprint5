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
      content: ""
      // category: String,
      // date: Date,
      // isAnswered: Boolean,
      // isVisible: Boolean
    }
  }
  // handleSubmit = event => {
  //   this.setState({
  //     name: event.target.name,
  //   })
  // }

//   handleInputChange = event => {
//   const target = event.target
//   const value = target.value
//   const name = target.name
//
//   this.setState({
//     [name]: value
//   })
// }

  render() {
    return (
      <div>
        <form className="topic-form" onSubmit={this.handleSubmit}>
          <label>
            <h3>Name:</h3>
            <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            <h3>Email:</h3>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <label>
            <h3>Topic:</h3>
            <input
              type="text"
              value={this.state.headline}
              onChange={this.handleInputChange} />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea
              value={this.state.content}
              onChange={this.handleInputChange}
            />
          </label>
          <button
            type="submit">Submit
          </button>
        </form>
      </div>
    )
  }
}
