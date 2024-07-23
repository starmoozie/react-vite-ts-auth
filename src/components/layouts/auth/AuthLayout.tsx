/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

export const AuthLayout = () => {
	const isAuthenticated = useAuth((state: any) => state.isAuthenticated);

	return <>{isAuthenticated ? <Navigate to={"dashboard"} /> : <Outlet />}</>;
};

export default AuthLayout;
