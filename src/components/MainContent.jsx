import React from "react"
import Form from "./Form"

function MainContent({ setUserInfo }) {
  return (
    <main>
      <Form setUserInfo={setUserInfo} />
    </main>
  )
}

export default MainContent
