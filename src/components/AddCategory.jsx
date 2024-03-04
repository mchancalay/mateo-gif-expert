import React, { useState } from 'react'

const AddCategory = ( { handleAddCategory }) => {

  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCategory(search)
    setSearch('')
  }

  return (
    <form action="" onSubmit={ handleSubmit }>
      <input
        placeholder='Search GIF'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>

  )
}

export default AddCategory