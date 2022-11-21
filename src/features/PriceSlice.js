import { createSlice } from '@reduxjs/toolkit'

const priceSlice = createSlice({
    name: 'user',
    initialState: { value: null },
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload;
        },

    }
})
//actions creators
export const { setPrice } = priceSlice.actions

export const selectPrice = state => state.price.price

export default priceSlice.reducer

