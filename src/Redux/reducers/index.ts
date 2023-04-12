import { combineReducers } from "redux";

const songReducer = () => {
}

const selectedSongReducer = (selectedSong = null, action) => {
}

const playerstateReducer = (playerstate = null, action) => {
}

const volumeReducer = (volume = null, action) => {
}

const durationReducer = (playtime = null, action) => {
}


const rootReducer = combineReducers({
    // songs: songReducer,
    // selectedSong: selectedSongReducer,
    // playerstate: playerstateReducer,
    // volume: volumeReducer,
    // duration: durationReducer
});

export default rootReducer;