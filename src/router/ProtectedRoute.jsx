import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export function ProtectedRoute({children}) {
    const { user, loading } = useUserContext();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }
   
   
    return children ? children : <Outlet />;
};

// replace dot permit the user to go back in the navigation