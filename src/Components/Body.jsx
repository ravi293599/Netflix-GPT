import React from 'react'
import Login from "../Pages/Login"
import Browse from "../Pages/Browse"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../Pages/Home"
import ProtectedRoute from './ProtectedRoute'
import PublicOnlyRoute from './PublicOnlyRoute'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
          element: <PublicOnlyRoute />,
          children: [
            {
            path: "/login",
            element: <Login />
          },
          ],
        },
        
        // {
        //   path: '/browse',
        //   element: (
        //     <ProtectedRoute isAuthenticated={isAuthenticated}>
        //       {isAuthenticated && <Browse />}
        //     </ProtectedRoute>
        //   ),
        // },
        {
          element: <ProtectedRoute />, // Wrap protected routes
          children: [
            {
              path: '/browse',
              element: <Browse />,
            },
          ],
        },
        // {
        //     path: "/browse",
        //     element: <Browse />
        // }
    ])
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
export default Body
