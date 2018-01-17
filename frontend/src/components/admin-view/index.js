import React from "react"
import "./style.css"
import DashBoard from "../dashboard"
import Topic from "../topic"
import TopicForm from "../topic-form"

export default class AdminView extends React.Component {
  render() {
    return (
      <div>
        <aside>
          <DashBoard />
        </aside>
        <main>
          <Topic />
        </main>
        <section>
          <TopicForm />
        </section>
      </div>
    )
  }
}
