import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { ErrorPage } from '@/7-shared/ui'

export const RouteErrorBoundary = () => {
    const error = useRouteError()
    return <>{isRouteErrorResponse(error) && error.data?.message && <ErrorPage error={error.data} />}</>
}
