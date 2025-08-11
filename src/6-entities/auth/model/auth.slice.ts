import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { IAuthState, IUserMe } from './types'

interface IAuthSlice {
  isAuth: boolean
  authState: IAuthState
  user?: IUserMe
}

const initialState: IAuthSlice = {
  isAuth: false,
  authState: {
    isLoading: false,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setAuthState: (state, { payload }: PayloadAction<IAuthState>) => {
      state.authState = { ...state.authState, ...payload }
    },
    setUser: (state, { payload }: PayloadAction<IUserMe | undefined>) => {
      state.user = payload
    },
  },
})

export const { setIsAuth, setAuthState, setUser } = authSlice.actions

export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectAuthState = (state: RootState) => state.auth.authState
export const selectMe = (state: RootState) => state.auth.user
