import React from 'react'
import { useParams } from 'react-router-dom'

const Singlemovies = () => {
  const { id } = useParams();
  return (
    <div>
      Single moives { id }
    </div>
  )
}

export default Singlemovies
