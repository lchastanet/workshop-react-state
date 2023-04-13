import React from "react"
import { useState } from "react"

const defaultImg =
  "https://gravatar.com/avatar/a8972cd4b8a5c54ad979335906e931b7?s=400&d=robohash&r=x"

function Form() {
  const [name, setName] = useState("Toto")
  const [picture, setPicture] = useState(defaultImg)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePictureChange = (e) => {
    setPicture(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something
  }

  return (
    <div className="profile-form">
      <div>
        <img src={picture} alt="pseudo" />
        <p>
          <strong>Name:</strong>
          {name}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          id="name"
          value={name}
        />
        <label htmlFor="picture">Picture adresse:</label>
        <input
          onChange={handlePictureChange}
          type="text"
          name="picture"
          id="picture"
          value={picture}
        />
        <input type="submit" value="Enregistrer" />
      </form>
    </div>
  )
}

export default Form
