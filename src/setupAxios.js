import axios from 'axios';
const req = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});
req.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// Add a response interceptor
req.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);
export default req;
