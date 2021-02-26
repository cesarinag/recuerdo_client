import React from 'react'

// accepts functions to be run as properties
// these functions live in the parent component when `BookForm` is used

const HaikuForm = ({ haiku, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="title"
      type="text"
      placeholder="12 max"
      value={haiku.title}
      onChange={handleChange}
    /><br />
    <input
      required
      name="fiveone"
      type="text"
      placeholder="18 max"
      value={haiku.fiveone}
      onChange={handleChange}
    /><br />
    <input
      required
      name="seven"
      type="text"
      placeholder="24 max"
      value={haiku.seven}
      onChange={handleChange}
    /><br />
    <input
      required
      name="fivetwo"
      type="text"
      placeholder="18 max"
      value={haiku.fivetwo}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default HaikuForm
