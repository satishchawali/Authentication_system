import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const { isLoggedin, userData } = useContext(AppContext);

    if (!isLoggedin) {
        toast.info("Please login to access this page");
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
