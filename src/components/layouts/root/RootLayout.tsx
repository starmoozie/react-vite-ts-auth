/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import { Link, Outlet } from "react-router-dom";
import { ucwords } from "../../../utils/helper";
import { useAuth } from "../../../hooks/auth";

export const RootLayout = memo(() => {
	return (
		<div>
			<ul className="list-disc">
				<PublicNavigation />
				<PrivateNavigation />
			</ul>

			<hr />

			<Outlet />
		</div>
	);
});

const PublicNavigation = () => {
	const isAuthenticated = useAuth((state: any) => state.isAuthenticated);

	return (
		<>
			<li>
				<Link to="/">Welcome</Link>
			</li>
			{!isAuthenticated && (
				<li>
					<Link to="/login">Login</Link>
				</li>
			)}
		</>
	);
};

const PrivateNavigation = () => {
	const data = useAuth((state: any) => state.data);
	const logout = useAuth((state: any) => state.setLogout);

	return (
		<>
			{data && (
				<>
					{data?.router.map((route: any, index: number) => {
						return (
							<li key={index}>
								<Link to={route.name}>
									{ucwords(route.name)}
								</Link>
							</li>
						);
					})}
					<li>
						<Link onClick={logout} to="/">
							Log Out
						</Link>
					</li>
				</>
			)}
		</>
	);
};

export default RootLayout;
