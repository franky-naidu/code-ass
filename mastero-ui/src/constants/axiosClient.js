import axios from "axios";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL,
});

export const restClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("auth-token")}`,
    },
});