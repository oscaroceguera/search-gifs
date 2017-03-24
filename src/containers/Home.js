import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';

import '../styles/app.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          onTermChange={ this.props.requestGifs }
        />
        <GifList
          gifs={ this.props.gifs }
          onGifSelect={ selectedGif => this.props.openModal({selectedGif}) }
        />
        <GifModal
          modalIsOpen={ this.props.modalIsOpen }
          selectedGif={ this.props.selectedGif }
          onRequestClose={ () => this.props.closeModal() }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...Actions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
