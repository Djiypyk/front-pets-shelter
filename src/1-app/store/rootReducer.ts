import { combineReducers } from '@reduxjs/toolkit'

import { appSlice } from '@/6-entities/app'


export const rootReducer = combineReducers({
    [appSlice.name]: appSlice.reducer,
})
