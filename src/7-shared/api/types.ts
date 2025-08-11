export interface IPaginationResponse<D> {
    results: D[]
    count: number
    total_pages: number
}

export interface IActionResponse<T> {
    status: 'success' | 'error'
    message: string
    result: T
}

export interface IRejectRequest<F> {
    response: {
        data: IRejectFields<F>
    }
}

export type IRejectFields<F> = { message?: string; detail?: string | string[] } & Record<keyof F, string>
export type ICommonErrorReject = {
    response: {
        data: {
            message: string
        }
    }
}
