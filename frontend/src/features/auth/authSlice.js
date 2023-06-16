import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Get user from loaclStorage
const user = JSON.parse(loacalStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    massage: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       reset: (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = ''
       }
    },
    extraReducers: () => {}
})

export const { reset } = authSlice.actions
export default authSlice.reducer