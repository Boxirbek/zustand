// src/api/index.js
import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Mahsulotlarni olishda xatolik yuz berdi:', error);
    return [];
  }
};
