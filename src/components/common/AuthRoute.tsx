import React from "react";
import { StorageKey } from "../../models/common";
import { Navigate } from "react-router-dom";

const AuthRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const token = localStorage.getItem(StorageKey.token);

  if (token) {
    return <Navigate to="/admin/dashboard" />;
  }
  return children;
};
export { AuthRoute };
