import React from 'react'

// accepts functions to be run as properties
// these functions live in the parent component when `BookForm` is used

const HaikuForm = ({ haiku, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      name="fiveone"
      type="text"
      placeholder="18 characters max"
      value={haiku.fiveone}
      onChange={handleChange}
    /><br />
    <input
      name="seven"
      type="text"
      placeholder="24 characters max"
      value={haiku.seven}
      onChange={handleChange}
    /><br />
    <input
      name="fivetwo"
      type="text"
      placeholder="18 characters max"
      value={haiku.fivetwo}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default HaikuForm