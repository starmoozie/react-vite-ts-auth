/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */

import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routePublic } from "./routePublic";
import { routePrivateMapping } from "./routePrivate";
import { useAuth } from "../hooks/auth";

export const Route = () => {
	const data = useAuth((state: any) => state.data);

	// If is authenticated, then merge public routes with private routes
	const routes = useMemo(() => {
		const getRoute = data
			? routePublic.map((route) => {
					route.children = route.children?.map((e) => {
						if (e?.id && e.id === "private") {
							e.children = routePrivateMapping(data.router);
						}

						return e;
					});

					return route;
			  })
			: routePublic;

		const route = createBrowserRouter(getRoute);

		return route;
	}, [data]);

	return <RouterProvider router={routes} />;
};

export default Route;
