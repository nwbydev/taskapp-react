import { publicApi } from "./api";

export const login = (data) => publicApi.post('/auth/log-in', data);
export const register = (data) => publicApi.post('/auth/sign-up', data);