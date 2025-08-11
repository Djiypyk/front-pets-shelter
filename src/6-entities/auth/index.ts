export { authApi } from './api/auth.api'

export type {
    ILoginForm,
    IForgotPassword,
    IRegisterForm,
    IRecoveryPassUrlParams,
    ICheckTokenForm,
    ILoginFormError,
    IRegistrationForm,
    IUserMe,
} from './model/types'
export { EMAIL_MESSAGE_TYPE } from './model/types'
export { authSlice, setIsAuth, selectIsAuth, selectAuthState, selectMe, setAuthState, setUser } from './model/auth.slice'
export {
    loginThunk,
    logoutThunk,
    getMeThunk,
    forgotPasswordThunk,
    recoveryPasswordThunk,
    checkTokenThunk,
    registerThunk,
} from './model/auth.thunks'
