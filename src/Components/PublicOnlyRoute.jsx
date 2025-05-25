import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicOnlyRoute = () => {
      const user = useSelector((store) => store.user)

  if (user) {
    return <Navigate to="/browse" replace />;
  }

  return <Outlet />;
}

export default PublicOnlyRoute