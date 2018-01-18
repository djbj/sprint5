import React from "react"
// import uuid from "uuid/v4"
import "./style.css"
import Topic from "../topic"
import Comment from "../comments"
import CommentForm from "../comment-form"

export default class TopicList extends React.Component {

  render() {
    return (
      <div>
        <section className="topic-list">
          {this.props.topicList.map(topic => {
            return <div><Topic
              headline={topic.headline}
              content={topic.content}
              name={topic.name}
              id={topic._id}
              category={topic.category}
              date={topic.date}
              isAnswered={topic.isAnswered}
              isVisible={topic.isVisible} />
            <CommentForm
              id={topic._id}
              handleNewComment={this.props.handleNewComment}
              newComment={topic.isAnswered} />
            <Comment
              commentList={this.props.commentList} />
          </div>
          })}
        </section>

      </div>
    )
  }
}
