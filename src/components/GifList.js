import React from 'react'
import GifItem from './GifItem'

const GifList = ({gifs, onGifSelect, onFavoriteSelect, onFavoriteDeselect, isAuthenticated, isFavorite}) => {
  const gifItems = gifs.map((image) => {
    return <GifItem
      key={image.id}
      gif={image}
      onGifSelect={onGifSelect}
      onFavoriteSelect={onFavoriteSelect}
      onFavoriteDeselect={onFavoriteDeselect}
      isAuthenticated={isAuthenticated}
      isFavorite={isFavorite}/>
  })

  return (
    <div className="gif-list">{gifItems}</div>
  )
}

export default GifList
