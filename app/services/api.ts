import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http')) {
    return path; // full url
  }
  return `http://localhost:3000${path}`; // prepend backend url
};

export { api };
