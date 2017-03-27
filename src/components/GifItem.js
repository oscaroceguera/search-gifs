import React from 'react'

class GifItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorited: this.props.isFavorite
    }
  }

  favoriteFig () {
    this.setState({ favorited : true })
    this.props.onFavoriteSelect(this.props.gif)
  }

  unFavoriteGif () {
    this.setState({ favorited: false })
    this.props.onFavoriteDeselect(this.props.gif)
  }

  renderFavoriteHeart = () => {
    if (!this.props.isAuthenticated) {
      return ''
    }

    if (this.state.favorited) {
      return <li className="favorite fa fa-heart" onClick={() => this.unFavoriteGif()}></li>
    }

    return <li className="favorite fa faheart-o" onClick={() => this.favoriteFig()}></li>
  }

  render () {
    return (
      <div className="gif-item">
        {this.renderFavoriteHeart()}
        <img src={this.props.gif.images.downsized.url} alt="asd" onClick={() => this.props.onGifSelect(this.props.gif)}/>
      </div>
    )
  }
}

export default GifItem
