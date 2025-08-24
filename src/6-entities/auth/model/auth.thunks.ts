import { createAsyncThunk } from '@reduxjs/toolkit'

import { IRejectRequest } from '@/7-shared/api'
import { JWTToken } from '@/7-shared/lib/jwtToken'

import { setAuthState, setIsAuth, setRandomDogImage, setUser } from './auth.slice'
import { ICheckTokenForm, IForgotPassword, ILoginForm, IRegisterForm, IRegistrationBody } from './types'

import { authApi } from '../api/auth.api'

export const getMeThunk = createAsyncThunk<void, void, { state: RootState }>('auth/getMe', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setAuthState({ isLoading: true }))
        const result = await authApi.me()
        dispatch(setIsAuth(true))
        dispatch(setUser(result))
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setAuthState({ isLoading: false }))
    }
})

export const loginThunk = createAsyncThunk<void, ILoginForm, { state: RootState }>(
    'auth/login',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setAuthState({ isLoading: true }))
            const result = await authApi.login(data)
            JWTToken.setTokens(result.access, result.refresh)
            await dispatch(getMeThunk())
        } catch (error) {
            return rejectWithValue((error as IRejectRequest<ILoginForm>)?.response?.data)
        } finally {
            dispatch(setAuthState({ isLoading: false }))
        }
    },
)

export const registerThunk = createAsyncThunk<void, IRegistrationBody, { state: RootState }>(
    'auth/register',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setAuthState({ isLoading: true }))
            await authApi.register(data)
        } catch (error) {
            return rejectWithValue((error as IRejectRequest<ILoginForm>)?.response?.data)
        } finally {
            dispatch(setAuthState({ isLoading: false }))
        }
    },
)

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>('auth/logout', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setAuthState({ isLoading: true }))
        dispatch(setIsAuth(false))
        dispatch(setUser(undefined))
        JWTToken.removeTokens()
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setAuthState({ isLoading: false }))
    }
})

export const forgotPasswordThunk = createAsyncThunk<void, IForgotPassword, { state: RootState }>(
    'auth/forgotPassword',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setAuthState({ isLoading: true }))
            await authApi.forgotPassword(data)
        } catch (error) {
            return rejectWithValue((error as IRejectRequest<IForgotPassword>)?.response?.data)
        } finally {
            dispatch(setAuthState({ isLoading: false }))
        }
    },
)

export const recoveryPasswordThunk = createAsyncThunk<void, IRegisterForm, { state: RootState }>(
    'auth/createPassword',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setAuthState({ isLoading: true }))
            await authApi.recoveryPassword(data)
        } catch (error) {
            return rejectWithValue((error as IRejectRequest<IRegisterForm>)?.response?.data)
        } finally {
            dispatch(setAuthState({ isLoading: false }))
        }
    },
)

export const checkTokenThunk = createAsyncThunk<void, ICheckTokenForm, { state: RootState }>(
    'auth/checkToken',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setAuthState({ isLoading: true }))
            await authApi.checkToken(data)
        } catch (error) {
            return rejectWithValue((error as IRejectRequest<ICheckTokenForm>)?.response?.data)
        } finally {
            dispatch(setAuthState({ isLoading: false }))
        }
    },
)

// TODO: удалить этот thunk
export const testApiRandomDogThunk = createAsyncThunk<void, void, { state: RootState }>('auth/testApiRandomDog', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setAuthState({ isLoading: true }))
        const result = await authApi.testApiRandomDog()
        dispatch(setRandomDogImage(result.message))
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setAuthState({ isLoading: false }))
    }
})
