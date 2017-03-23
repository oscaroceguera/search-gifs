import React from 'react'
import Modal from 'react-modal'

const GifModal = ({modalIsOpen, onRequestClose, selectedGif}) => {
  if (!selectedGif) {
    return <div></div>
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel='example'
      onRequestClose={() => onRequestClose() }>
      <div className="gif-modal">
        <img src={selectedGif.images.original.url} alt='chabe'/>
        <p><strong>Source:</strong> <a href={selectedGif.source}>{ selectedGif.source }</a></p>
        <p><strong>Raiting:</strong> {selectedGif.rating}</p>
        <button onClick={() => onRequestClose()}>Close</button>
      </div>
    </Modal>
  )
}

export default GifModal
