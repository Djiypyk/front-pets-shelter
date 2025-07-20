import { values } from 'lodash'
import { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { selectIsInit, setIsInit } from '@/6-entities/app'
// import { getMeThunk, selectIsAuth } from '@/6-entities/auth'
// import { getUsersSelectThunk } from '@/6-entities/users'
import { useAppDispatch, useAppSelector } from '@/7-shared/hooks'
import { PATH_PAGE, PUBLIC_PAGES } from '@/7-shared/lib/router'

export const InitLayout = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    // const isAuth = useAppSelector(selectIsAuth)
    const isInit = useAppSelector(selectIsInit)

    const navigateToCurrentPage = () => {

        navigate(`${location.pathname}${location.search}`, {
            replace: true,
            state: location?.state,
        })
    }

    const initApp = async () => {
        // TODO: Thunk for getMe data
        // await dispatch(getMeThunk())
        dispatch(setIsInit(true))
    }

    // const checkPrivateUrl = () => {
    //     const res = matchRoutes(
    //         Object.values(PRIVATE_PAGES).map((page) => ({
    //             path: page.root,
    //             access: page.access,
    //         })),
    //         location.pathname,
    //     )

    //     if (location.pathname === PATH_PAGE.main.root) {
    //         navigate(PATH_PAGE.main.root)
    //         return
    //     }

    //     if (values(PRIVATE_PAGES).some((i: any) => location.pathname === i.root)) {
    //         navigateToCurrentPage()
    //         return
    //     }

    //     if (res?.length && res[0]?.route?.path) {
    //         navigateToCurrentPage()
    //         return
    //     }
    //     navigate(PATH_PAGE.main.root, { replace: true })
    // }

    const checkPublicUrl = () => {
        if (values(PUBLIC_PAGES).includes(location.pathname)) {
            navigateToCurrentPage()
        } else {
            navigate(PATH_PAGE.login, { replace: true })
        }
    }

    useEffect(() => {
        if (!isInit) {
            initApp()
        }
    }, [isInit])

    useEffect(() => {
        if (!isInit) {
            return
        }
        // if (isAuth) {
        // checkPrivateUrl()
        //  TODO: Thunk for getUsersSelect data
        // dispatch(getUsersSelectThunk())
        // return
        // }
        checkPublicUrl()
    }, [isInit, location.pathname])

    if (!isInit) {
        return <div>Загрузка...</div>
    }
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Outlet />
        </Suspense>
    )
}
