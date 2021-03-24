import React from 'react'
import './HaikuForm.css'

// accepts functions to be run as properties
// these functions live in the parent component when `HaikuForm` is used

const HaikuForm = ({ haiku, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="title"
      type="text"
      placeholder="12 max"
      // style="width:200px;height:200px"
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
    /><hr /><br/>
    <button type="submit"><h4>Submit</h4></button>
  </form>
)

export default HaikuForm
