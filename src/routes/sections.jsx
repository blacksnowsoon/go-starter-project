import { lazy, Suspense } from 'react'
import { Outlet, Navigate, useRoutes } from 'react-router-dom'

import DashboardLayout from 'src/layouts/dashboard/Dashboard'

export const LoginPage = lazy(()=> import('src/pages/login'))
export const IndexPage = lazy(() => import('src/pages/app'))


export const Page404 = lazy(()=> import('src/pages/page-not-found'))



// define the routes tree

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '/', element: <IndexPage />, index: true },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])
  return routes
}