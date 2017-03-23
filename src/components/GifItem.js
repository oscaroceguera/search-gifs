import React from 'react'

const GifItem = ({gif, onGifSelect}) => (
  <div className="gif-item" onClick={() => onGifSelect(gif)}>
    <img src={gif.images.downsized.url} alt='imagen'/>
  </div>
)


export default GifItem
