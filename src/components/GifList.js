import React from 'react'
import GifItem from './GifItem'

const GifList = ({gifs, onGifSelect}) => {
  const gifItems = gifs.map((image) => {
    return <GifItem
      key={image.id}
      gif={image}
      onGifSelect={onGifSelect}/>
  })

  return (
    <div className="gif-list">{gifItems}</div>
  )
}

export default GifList
