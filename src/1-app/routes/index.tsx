import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/2-layouts/appLayout'

// import { AuthLayout } from '@/2-layouts/authLayout'
import { InitLayout } from '@/2-layouts/initLayout'

import { RootPage } from '@/3-pages/root'

import { PATH_PAGE, RouteErrorBoundary } from '@/7-shared/lib/router'
import { NotFoundPage } from '@/7-shared/ui'

export const router = createBrowserRouter([
  {
    element: <InitLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      // {
      //   element: <AuthLayout />,
      //   errorElement: <RouteErrorBoundary />,
      //   children: [
      //     // {
      //     //   element: <LoginPage />,
      //     //   path: PATH_PAGE.login,
      //     // },
      //     // {
      //     //   element: <ForgotPasswordPage />,
      //     //   path: PATH_PAGE.forgot_password,
      //     // },
      //     // {
      //     //   element: <RecoveryPasswordPage />,
      //     //   path: PATH_PAGE.recovery_pass,
      //     // },
      //     // {
      //     //   element: <RecoverySuccessPage />,
      //     //   path: PATH_PAGE.forgot_success,
      //     // },
      //     // {
      //     //   element: <RegisterPage />,
      //     //   path: PATH_PAGE.register,
      //     // },
      //     // {
      //     //   element: <RegisterSuccessPage />,
      //     //   path: PATH_PAGE.register_success,
      //     // },
      //   ],
      // },
      {
        element: <AppLayout />,
        errorElement: <RouteErrorBoundary />,
        children: [
          {
            element: <RootPage />,
            path: PATH_PAGE.root,
          },
          // {
          //   element: <SecondPage />,
          //   path: PATH_PAGE.second,
          // },
          // {
          //   element: <UsersPage />,
          //   path: PATH_PAGE.users.root,
          // },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
