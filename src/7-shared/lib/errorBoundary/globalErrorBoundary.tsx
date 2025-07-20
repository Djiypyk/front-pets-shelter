import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorPage } from '@/7-shared/ui'

interface IProps {
    children: ReactNode
}

export const GlobalErrorBoundary = ({ children }: IProps) => {
    return <ErrorBoundary fallbackRender={ErrorPage}>{children}</ErrorBoundary>
}
