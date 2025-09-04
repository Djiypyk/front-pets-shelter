import { combineReducers } from '@reduxjs/toolkit'

import { appSlice } from '@/6-entities/app'
import { authSlice } from '@/6-entities/auth'


export const rootReducer = combineReducers({
    [appSlice.name]: appSlice.reducer,
    [authSlice.name]: authSlice.reducer,
})
