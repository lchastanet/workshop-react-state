import React from "react"

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // do something
  }

  return (
    <div className="profile-form">
      <div>
        <img
          src="https://gravatar.com/avatar/0920913a0f1a906d8f9eb2db7128e177?s=400&d=robohash&r=x"
          alt="pseudo"
        />
        <p>
          <strong>Name:</strong> Toto
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="picture">Picture adresse:</label>
        <input type="text" name="picture" id="picture" />
        <input type="submit" value="Enregistrer" />
      </form>
    </div>
  )
}

export default Form
