export const PUBLIC_PAGES = {
    login: '/login',
    forgot_password: '/forgot-password',
    recovery_pass: '/change-password',
    forgot_success: '/forgot-success',
    register: '/register',
    register_success: '/register-success',
    root: '/',
    second: '/second',
}

const COMMON_PAGES = {
    page404: '/404',
}

export const PATH_PAGE = {
    ...PUBLIC_PAGES,
    ...COMMON_PAGES,
}
