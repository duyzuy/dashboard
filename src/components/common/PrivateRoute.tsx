import React from "react";
import { StorageKey } from "../../models/common";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const token = localStorage.getItem(StorageKey.token);

  if (token) {
    return children;
  }
  return <Navigate to="/auth/login" />;
};
export { PrivateRoute };
