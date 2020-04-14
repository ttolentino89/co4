import axios from 'axios';
// const baseUrl = 'http://localhost:3000'
// const baseUrl = 'https://co4.herokuapp.com/'

const baseUrl = process.env.NODE_ENV === 'production' ?
'https://co4.herokuapp.com/'
: 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

//=====Auth=====

export const loginUser = async (loginData) => {
  const res = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.user
}

export const registerUser = async (registerData) => {
  const res = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    console.log(`Bearer ${token}`)
    const res = await api.get('/auth/verify');
    return res.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

//=====Items=====

export const readAllItems =  async () => {
  const res = await api.get('/items');
  return res.data;
}

export const readItemByID =  async (id) => {
  const res = await api.get(`/items/${id}`);
  return res.data;
}

export const createItem =  async (itemData) => {
  const res = await api.post('/items/', {item: itemData});
  return res.data;
}

export const updateItem =  async (id, itemData) => {
  console.log(id, itemData, "hi")
  const res = await api.put(`/items/${id}`, {item: itemData});
  return res.data;
}

export const destroyItem =  async (id) => {
  const res = await api.delete(`/items/${id}`);
  return res.data;
}

//=====Categories=====

export const readAllCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
}

export const addCategory = async (categoryId, id) => {
  const res = await api.get(`/categories/${categoryId}/items/${id}`);
  return res.data
}
