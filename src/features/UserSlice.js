import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: { value: null },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null
        },
    }
})
//actions creators
export const { login, logout, } = userSlice.actions

export const selectUser = state => state.user.price

export default userSlice.reducer

