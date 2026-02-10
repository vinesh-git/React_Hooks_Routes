import { Outlet,Navigate } from "react-router-dom";

// type ProtectedRouteProps = {
//     children : React.ReactNode
// }

export default function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("auth");
  if(!isLoggedIn){
    return <Navigate to='/login' replace />
  }
  return <Outlet/>;
}
