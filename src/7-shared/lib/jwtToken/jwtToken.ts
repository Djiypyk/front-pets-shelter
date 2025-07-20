export const JWTToken = {
    getAccess() {
        return localStorage.getItem('access_token')
    },
    getRefresh() {
        return localStorage.getItem('refresh_token')
    },
    setTokens(access: string, refresh: string) {
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    },
    removeTokens() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    },
}
