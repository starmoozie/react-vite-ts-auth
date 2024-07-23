/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import Cookies from "js-cookie";
import crypto from "crypto-js";
import { encryptKey } from "../config/key";

const COOKIE_NAME = "res";

const checkIsAuthenticated = () => {
	const data = Cookies.get(COOKIE_NAME);

	if (data) {
		const decrypt = crypto.AES.decrypt(data.toString(), encryptKey);

		try {
			const decryptString = decrypt.toString(crypto.enc.Utf8);
			const decryptObject = JSON.parse(decryptString);

			return {
				isAuthenticated: decryptObject?.token ? true : false,
				data: decryptObject?.token ? decryptObject : undefined,
			};
		} catch (error) {
			/**
			 * Force logout
			 */
			Cookies.remove(COOKIE_NAME);

			return {
				isAuthenticated: false,
				data: undefined,
			};
		}
	}
};

export const useAuth = create((set) => {
	const checkAuth = checkIsAuthenticated();

	return {
		isAuthenticated: checkAuth?.isAuthenticated || false,
		data: checkAuth?.data,
		setLogin: (data: any) => {
			const encryptedData = crypto.AES.encrypt(
				JSON.stringify(data),
				encryptKey
			);

			Cookies.set(COOKIE_NAME, encryptedData.toString());

			set((state: any) => ({
				...state,
				...{
					isAuthenticated: true,
					data: data,
				},
			}));
		},
		setLogout: () => {
			Cookies.remove(COOKIE_NAME);

			set((state: any) => ({
				...state,
				...{
					isAuthenticated: false,
					data: undefined,
				},
			}));
		},
	};
});
