import { instance } from '@/7-shared/api'

import { ILoginResponse } from './types'

import type { ICheckTokenForm, IForgotPassword, ILoginForm, IRegisterForm, IRegistrationBody, IUserMe } from '../model/types'

export const authApi = {
    login(data: ILoginForm): Promise<ILoginResponse> {
        return instance.post(`/users/auth/token/`, data).then((data) => data.data)
    },
    register(data: IRegistrationBody): Promise<boolean> {
        return instance.post(`/users/registration/`, data).then((data) => data.data)
    },
    me(): Promise<IUserMe> {
        return instance.get(`/users/me/`).then((data) => data.data)
    },
    forgotPassword(data: IForgotPassword) {
        return instance.post(`/users/password/recovery-password/`, data)
    },
    recoveryPassword(data: IRegisterForm) {
        return instance.post('/users/password/change-password/', data)
    },
    checkToken(data: ICheckTokenForm): Promise<boolean> {
        return instance.post('/users/password/check-token/', data)
    },
    // TODO: удалить этот метод
    testApiRandomDog(): Promise<any> {
        return instance.get('breeds/image/random').then((data) => data.data)
    },
}
