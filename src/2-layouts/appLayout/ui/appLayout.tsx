import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="flex flex-1 w-full">
                {/* <Navbar /> */}
                <div className="flex flex-col flex-1 w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}