import { privateApi } from "./api";

export const fetchTasks = () => privateApi.get('/task/findByUser');
export const createTask = (data) => privateApi.post('/task/save', data);
export const updateTask = (id, data) => privateApi.put(`/task/update/${id}`, data);
export const deleteTask = (id) => privateApi.delete(`/task/delete/${id}`);
export const fetchTasksByStatus = (status) => privateApi.get(`/task/findByStatus/${status}`);
export const fetchTasksByPriority = (priority) => privateApi.get(`/task/findByPriority/${priority}`);
export const fetchTasksByCategory = (idCategory) => privateApi.get(`/task/findByCategory/${idCategory}`);