/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

export const PrivateLayout = memo(() => {
	const isAuthenticated = useAuth((state: any) => state.isAuthenticated);

	return (
		<>
			{!isAuthenticated ? (
				<Navigate to={"/login"} replace={true} />
			) : (
				<Outlet />
			)}
		</>
	);
});

export default PrivateLayout;
