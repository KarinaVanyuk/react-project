import {combineReducers} from 'redux';
import notes from './notes.js';
import findNote from './findNote.js';
export default combineReducers({
    notes,
    findNote

})
