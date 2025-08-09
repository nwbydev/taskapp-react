import { privateApi } from "./api";

export const fetchCategories = () => privateApi.get('/category/findByUser');
export const createCategory = (data) => privateApi.post('/category/save', data);
export const updateCategory = (id, data) => privateApi.put(`/category/update/${id}`, data);
export const deleteCategory = (id) => privateApi.delete(`/category/delete/${id}`);