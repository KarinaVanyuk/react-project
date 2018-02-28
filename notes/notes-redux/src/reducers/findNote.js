const initialState = '';
export default function findNote(state=initialState, action) {
    if (action.type ==='FIND_NOTE'){
        return action.payload;
    }
    return state;
}