import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL,
});

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http')) {
    return path;
  }
  return `${baseURL}${path}`;
};

export { api };
