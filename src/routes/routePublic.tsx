/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteObject } from "react-router-dom";
import { RootLayout } from "../components/layouts/root";

export const routePublic: RouteObject[] = [
	{
		Component: RootLayout,
		children: [
			{
				path: "/",
				async lazy() {
					const { Welcome } = await import("../pages/public/welcome");

					return { Component: Welcome };
				},
			},
			{
				id: "auth",
				async lazy() {
					const { AuthLayout } = await import(
						"../components/layouts/auth"
					);

					return { Component: AuthLayout };
				},
				children: [
					{
						path: "login",
						async lazy() {
							const { Login } = await import(
								"../pages/public/auth/login"
							);

							return { Component: Login };
						},
					},
				],
			},
			{
				id: "private",
				async lazy() {
					const { PrivateLayout } = await import(
						"../components/layouts/private"
					);

					return { Component: PrivateLayout };
				},
			},
			{
				path: "*",
				async lazy() {
					const { NotFound } = await import(
						"../components/errors/not-found"
					);

					return { Component: NotFound };
				},
			},
		],
	},
];
