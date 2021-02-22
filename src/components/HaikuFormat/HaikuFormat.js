import React from 'react'

// accepts functions to be run as properties
// these functions live in the parent component when `BookForm` is used

const HaikuFormat = ({ handleSubmit, handleInputChange, haiku }) => (
  <form onSubmit={handleSubmit}>
    <input
      name="fiveone"
      type="text"
      placeholder="18 characters max"
      value={haiku.fiveone}
      onChange={handleInputChange}
    />
    <input
      name="seven"
      type="text"
      placeholder="24 characters max"
      value={haiku.seven}
      onChange={handleInputChange}
    />
    <input
      name="fivetwo"
      type="text"
      placeholder="18 characters max"
      value={haiku.fivetwo}
      onChange={handleInputChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default HaikuFormat
