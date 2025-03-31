import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({isAuthenticated}) =>{
    isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
export default ProtectedRoute