import React from 'react'
import Login from "../Pages/Login"
import Browse from "../Pages/Browse"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../Pages/Home"
import ProtectedRoute from './ProtectedRoute'

const Body = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // console.log(isAuthenticated);

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: '/browse',
          element: (
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          ),
        },
        // {
        //   element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
        //   children: [
        //     {
        //       path: "/browse",
        //       element: <Browse />
        //     }
        //   ]
        // }
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
