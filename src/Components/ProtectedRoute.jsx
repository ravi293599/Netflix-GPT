import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom"

const ProtectedRoute = () =>{
    const user = useSelector((store) => store.user)

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>;
}
export default ProtectedRoute