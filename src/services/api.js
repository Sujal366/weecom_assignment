import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const productApi = {
  getProducts: async (params = {}) => {
    const {
      limit = 10,
      skip = 0,
      search = "",
      delay = 1000,
      category = "",
    } = params;
    let url = `/products?limit=${limit}&skip=${skip}&delay=${delay}`;

    if (category) {
      url = `/products/category/${category}?limit=${limit}&skip=${skip}&delay=${delay}`;
    } else if (search) {
      url = `/products/search?q=${encodeURIComponent(
        search
      )}&limit=${limit}&skip=${skip}&delay=${delay}`;
    }

    const response = await api.get(url);
    return response.data;
  },
  
  getProduct: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  
  addProduct: async (productData) => {
    const response = await api.post("/products/add", productData);
    return response.data;
  },
  
  updateProduct: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },
  
  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
  
  getCategories: async () => {
    const response = await api.get("/products/category-list");
    return response.data;
  },

  getProductsByCategory: async (category, params = {}) => {
    const { limit = 10, skip = 0, delay = 1000 } = params;
    let url = `/products/category/${category}?limit=${limit}&skip=${skip}&delay=${delay}`;
    const response = await api.get(url);
    return response.data;
  },
};

export default api;
