import React from "react"
import uuid from "uuid/v4"
import "style.css"

export default class TopicForm extends React.Component {
  render() {
    return (
      <div>
        <form className="topic-form">
          <label>
            <h3>Name:</h3>
            <input type="text" />
          </label>
          <label>
            <h3>Email:</h3>
            <input type="email" />
          </label>
          <label>
            <h3>Topic:</h3>
            <input type="text" />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea />
          </label>
          <button type="submit"></button>
        </form>
      </div>
    )
  }
}
