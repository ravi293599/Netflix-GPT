import { Navigate} from "react-router-dom"

const ProtectedRoute = ({ children }) =>{
    const isAuthenticated = localStorage.getItem('auth') === 'true'; // or use context

    return isAuthenticated ? children : <Navigate to="/login" />
}
export default ProtectedRoute