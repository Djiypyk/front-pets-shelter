import { createSlice } from '@reduxjs/toolkit'

export interface IAppState {
    isInit: boolean
}

const initialState: IAppState = {
    isInit: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsInit: (state, action) => {
            state.isInit = action.payload
        },
    },
})

export const selectIsInit = (state: RootState) => state.app.isInit

export const { setIsInit } = appSlice.actions
