import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Pergi dan Tinggalkan', duration : '3:45'},
        { title: 'Pergi Lah Kasih ', duration : '3:30'},
        { title: 'Kekasih Bayangan', duration : '3:50'},
        { title: 'Menghapus Jejakmu', duration : '3:38'}
    ]
}

const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return  selectedSong;
}

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});