import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectRouter = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <div>loading</div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default ProtectRouter;