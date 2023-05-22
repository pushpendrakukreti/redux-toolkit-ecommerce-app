//slice is way to store application data in pieces

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        //are functions that are used for state mutation
        //are pure functions, which doesn't have side effects (does not change data outside it's scope)

        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;