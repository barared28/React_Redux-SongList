import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../Actions'

const SongList = ({ songs, selectSong }) => {
    const renderList = () => {
        return songs.map((song, index) => {
            return (
                <div className='item' key={index}>
                    <div className='right floated content'>
                        <button
                            onClick={() => selectSong(song)}
                            className='ui button primary'>
                            Select
                        </button>
                    </div>
                    <div className='content'>
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='ui divided list'>
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}

// jadi connect itu me return sebuah function dimana function tersebut di beri props state (state dari callback mapStateToProps)
// sehingga si songlist dapat props secara otomatis
export default connect(mapStateToProps, { selectSong })(SongList);
// selectSong otomatis di convert kedalam dispatch function dan di pass ke songlist function