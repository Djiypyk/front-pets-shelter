import { IUser } from '@/7-shared/types'

export interface ILoginForm {
  email: Email
  password: string
}

export interface ILoginFormError {
  password_email: string[]
  email: string[]
  password: string[]
}

export interface IRegisterForm {
  first_password: string
  second_password: string
  token: string
  uid: string
}

export interface IRecoveryPassUrlParams {
  id: string
  token: string
  t: string
}

export interface IAuthState {
  isLoading: boolean
}

export interface IForgotPassword {
  email: Email
}

export interface ICheckTokenForm {
  token?: string
  uid?: string
}

export enum EMAIL_MESSAGE_TYPE {
  VERIFY = 'verify',
  RESET_PASSWORD = 'reset',
}

export interface IUserMe extends IUser {
  is_superuser: boolean
  is_staff: boolean
  is_active: boolean
  date_joined: Date
}

export interface IRegistrationForm {
  password: string
  retry_password?: string
}

export interface IRegistrationBody extends Omit<IRegistrationForm, 'retry_password'> {
  uid: string
  token: string
}
