import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com',
    // baseURL: 'http://localhost:3000',
});

export const apiIssues = axios.create({
    baseURL: 'https://api.github.com/search',
    // baseURL: 'http://localhost:3000',
});