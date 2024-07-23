/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../../../hooks/auth";

export const Dashboard = () => {
	const userData = useAuth((state: any) => state.data);

	return (
		<div>
			<h1 className="text-xl font-bold underline">Dashboard!</h1>
			<p>Hello, {userData.username}</p>
		</div>
	);
};

export default Dashboard;
