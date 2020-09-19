import React, { useState } from 'react'
import { fetchCharacters } from './actions'
import { connect } from 'react-redux'

const FetchCharacters = ({ fetchCharacters }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const newValue = event.target.value

    setValue(newValue)

    if (fetchCharacters) fetchCharacters(newValue)
  }

  return (
    <input
      onChange={handleChange}
      placeholder="Search Here"
      type="search"
      value={value}
    />
  )
}

export default connect(null, { fetchCharacters })(FetchCharacters)
