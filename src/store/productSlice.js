import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const STATUSES = Object.freeze(
    {
        IDLE: 'idle',
        ERROR: 'error',
        LOADING: 'loading',
    });

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     //reducers are synchronous
        //     //do not make api calls or perform any side affects inside reducers
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//thunk - is a middleware, a programming term that means "a piece of code that does some delayed work"
//Rather than executing some logic now, we can write a function body or code that can be used to perform the work later.

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    // const res = await fetch('https://fakestoreapi.com/products');  //returns stream
    const res = await fetch('https://dummyjson.com/products');  //returns stream
    const data = await res.json();
    return data.products;
})

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');  //returns stream
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         }
//         catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }