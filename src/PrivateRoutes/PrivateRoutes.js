import { Progress } from "flowbite-react";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <Progress progress={45} size="sm" color="dark" />
      </div>
    );
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
