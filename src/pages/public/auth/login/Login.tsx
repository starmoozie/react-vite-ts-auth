/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { memo, useCallback } from "react";
import { fields } from "./fields";
import { Form } from "../../../../components/form";
import { routerFromResponse } from "../../../../routes/routePrivate";
import { useAuth } from "../../../../hooks/auth";

export const Login = memo(() => {
	const setData = useAuth((state: any) => state.setLogin);

	const onSubmit = useCallback((data: any) => {
		const token =
			"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YzJhZjI5Yy0yZmQxLTRlNTQtODA2Yy1kYzVkMGI5NTM0YzIiLCJqdGkiOiIyNDUyYzM1YjYxYzg3MGFlNGMwMjI3NTI0MzFiMmY4MWY5YjA4NjllOTg1NzhlNDU4Y2M2ZTExY2Y0YzEwNjQ4NWEyNDcxYmRjNjkzYjVjNCIsImlhdCI6MTcyMTcwNzYwMS45Njc5MzMsIm5iZiI6MTcyMTcwNzYwMS45Njc5MzQsImV4cCI6MTc1MzI0MzYwMS45NjA3NDMsInN1YiI6IjQ2ZmY4Y2YzLTlhYjQtNDg4OS05ODRlLWIyNTkzM2IyMzU4OCIsInNjb3BlcyI6W119.PnS-KR82Run6SYdcKGlijakp_azelR6Vf2yd6DyYBQpPJVGaxVmugUINl8MVcJmyZO1M-zjgPtCuLlFuNzNpDANEXpmiH1km3PwI_LQFBm2r2eBjvFwHE7wmcy1dCzLs4nYObDQBu9vTZMxBPZD2JaKHfbCUqZkPC4bGxI6nhPTPze56F6mPUWYhFw75CVkf3t6eNtUWKm8GzYJvXZQwKk7_kDnGtULvAD4IlAO6VUBmxah_eIwjOFVi67fJd6DMbLeaDVShd3RIagUFdpmsMY6FfRg-A_CFBGcnKm7vPqorSYqy4PogmaInhoMS2YvQ6SnvhRTfGyLTW7mw75xsf0lj-9TBqoZ617WcY9oQkhkx_9cC5A9_9ZVrNK3GO_fqPnEuNAjuJvMOveEfI2-FpetZkHDccco-DcwsQoS2pru6mrkKDk1k6LRKTMPOIZbs4_H0o-8GpSA__5I48z5572Jf7CtYP_jgE_qdhGr9OyFKOJKAonDnRLaqzwXcuFY4jQH2CLy_LjfHfMRyCnxVtOnTTmTLs5lxVOX2dOnnaCJTCicqy3mFxVx2dLACexGdpo-Ey9UFqyf0BChHEVuOby25darruCNNPuIJklK3Q5dkkj6ckvkKc19R06albK18QP3b642fI5zGKiLhhyyWSpEnFPT5ccjiWs2LXFcYV4E";
		setData({
			...data,
			...{ router: routerFromResponse, token: token },
		});
	}, []);

	return (
		<>
			<h1 className="text-xl font-bold underline">Login</h1>
			<Form fields={fields} onSubmitCallback={onSubmit} />
		</>
	);
});

export default Login;
