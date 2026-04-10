// import axios from "axios"

// export interface Category {
//     id:string;
//     name:string;
//     products:Product[]
// }

// export interface Product {
//     id:string;
//     name:string;
//     price:number;
//     imageUrl?:string;
//     description?:string;
// }

// const API_BASE_URL = "http://192.168.1.45:3001/api/v1";

// export const api = axios.create({
//     baseURL:API_BASE_URL,
//     headers:{"Content-Type":"application/json"}
// });

// // api.interceptors.request.use(
// //     (config)=>{
// //         return config;
// //     },
// //     (error) => Promise.reject(error)
// // );

// // api.interceptors.response.use(
// //     (response)=>response,
// //     (error)=>{
// //         console.error("API Error",error?.response?.data);
// //         return Promise.reject(error)
// //     }
// // )

// let authInterceptor:number | null = null;

// export const fetchCategories = async() => (await api.get("categories")).data as Category

import axios, { AxiosError } from 'axios';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

const API_BASE_URL = 'http://192.168.1.38:3001/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* -------------------- REQUEST INTERCEPTOR -------------------- */
api.interceptors.request.use(
  config => {
    // You can attach auth token here later
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);

/* -------------------- RESPONSE INTERCEPTOR -------------------- */
api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

/* -------------------- OPTIONAL AUTH INTERCEPTOR HOLDER -------------------- */
let authInterceptor: number | null = null;

export function setAuthToken(token: string | null) {
  if (authInterceptor !== null) {
    api.interceptors.request.eject(authInterceptor);
  }

  if (token) {
    authInterceptor = api.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  } else {
    authInterceptor = null;
  }
}
/* -------------------- API FUNCTIONS -------------------- */

// ✅ Correct return type (array of categories)
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>('categories');
  return response.data;
};

export const signUp = async (data: {
  email: string;
  password: string;
  phone: string;
}) => (await api.post('/auth/signup', data)).data;

export const login = async (data: { emai: string; password: string }) =>
  (await api.post('/auth/login', data)).data;
