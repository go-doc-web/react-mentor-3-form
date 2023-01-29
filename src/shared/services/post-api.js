import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  params: {
    _limit: 4,
  },
});

export const searchPosts = async q => {
  const { data } = await instance.get('/', {
    params: {
      q,
    },
  });
  return data;
};

export const getallPosts = async () => {
  const { data } = await instance.get(`/`);
  return data;
};
