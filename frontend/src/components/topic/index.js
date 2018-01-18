import React from "react"
// import Comment from "../comments"
import "./style.css"

export default class Topic extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isHidden: false
  //   }
  // }
  //
  // toggleHidden() {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   })
  // }

  render() {
    return (
      <div>
        <div className="topic">
          <h1>{this.props.headline}</h1>
          <p className="content">{this.props.content}</p>
          <p className="userName">{this.props.name}</p>
          <p className="category">{this.props.category}</p>
          <p className="date">{this.props.date}</p>
        </div>

        {/* <div>
          <button onClick={this.toggleHidden ? "comment-form" : "hide"}>Add a comment</button>
          <Comment />
        </div> */}
      </div>
    )
  }
}
