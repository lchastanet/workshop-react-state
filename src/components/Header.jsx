import React from "react"

function Header({ userInfo }) {
  return (
    <header>
      <h1>Wild Profile</h1>
      <div>
        <p>{userInfo.name}</p>
        <img src={userInfo.picture} alt="toto" />
      </div>
    </header>
  )
}

export default Header
