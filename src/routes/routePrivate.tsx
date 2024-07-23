/* eslint-disable @typescript-eslint/no-explicit-any */

import { ucwords } from "../utils/helper";

export interface routerFromResponse {
	name: string;
}

export const routerFromResponse: routerFromResponse[] = [
	{
		name: "dashboard",
	},
];

export const routePrivateMapping = (routers: routerFromResponse[]) =>
	routers.map((e: routerFromResponse) => ({
		path: e.name,
		async lazy() {
			const componentName = ucwords(e.name);

			const importedComponent = await import(
				`../pages/private/${e.name}/index.tsx`
			);

			return { Component: importedComponent[componentName] };
		},
	}));
