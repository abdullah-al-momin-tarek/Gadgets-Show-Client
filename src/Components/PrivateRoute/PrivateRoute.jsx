import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <div className="flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;