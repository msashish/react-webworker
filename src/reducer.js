export const reducer = (state= {}, action) => {
    switch (action.type) {
        case "ENTER_NUMBER":
            return {
                ...state,
                entries: [
                    ...state.entries,
                    {
                        id: action.id,
                        num: action.num,
                        calculating: action.calculating
                    },
                ],
            };
        case "SET_NUMBER":
            return {...state, num: action.num};
        case "UPDATE_FIB": {
            const curr = state.entries.filter((c) => c.id === action.id)[0];
            const idx = state.entries.indexOf(curr);
            curr.calculating = false;
            curr.time_taken = action.time_taken;
            curr.fibValue = action.fibValue;
            state.entries[idx] = curr;
            return {...state};
            }
        default:
            return state;
    }
};
