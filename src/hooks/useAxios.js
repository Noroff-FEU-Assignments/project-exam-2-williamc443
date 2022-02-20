import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const url = process.env.REACT_APP_BASE_URL;

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer` : "797ce524bec8dc934a936d0d5064869e05a29ddfbc8710e1bd6f8aa661d91f017809e23de7f910c9c9325013d2a7a3f1a71997cc39713f09a4e2fb53220409240198b9060da7cad09dba13a6263e106c68401b951f57c393a4683beca1cfa57064425d9047e04113a746bb15b106c3305bcd589303a987ec4f40a48f7112ef45";
		return config;
	});

	return apiClient;
}