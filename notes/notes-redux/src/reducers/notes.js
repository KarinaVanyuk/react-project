const initialState = [];
export default function NotesList(state=initialState, action) {//Функция редьюсер
    if (action.type ==='Add_Note'){
        return[
            ...state,
            action.payload
    ];
    }
    return state
}
