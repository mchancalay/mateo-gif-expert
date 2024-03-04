import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const handleAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return;
    //setCategories([...categories, newCategory])
    setCategories([newCategory])
  }

  return (
    <div>
      <h1>GifExpertApp</h1>

      <AddCategory handleAddCategory={handleAddCategory} />

      <ol>
        {
          categories.map((c) => <GifGrid key={c} category={c} />)
        }
      </ol>

    </div>
  )
}

export default GifExpertApp