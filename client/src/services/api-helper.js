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
  const resp = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
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
  const resp = await api.get('/items');
  return resp.data;
}

export const readItemByID =  async (id) => {
  const resp = await api.get(`/items/${id}`);
  return resp.data;
}

export const createItem =  async (itemData) => {
  const resp = await api.post('/items/', {item: itemData});
  return resp.data;
}

export const updateItem =  async (id, itemData) => {
  console.log(id, itemData, "hi")
  const resp = await api.put(`/items/${id}`, {item: itemData});
  return resp.data;
}

export const destroyItem =  async (id) => {
  const resp = await api.delete(`/items/${id}`);
  return resp.data;
}

//=====Categories=====

export const readAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const addCategory = async (categoryId, id) => {
  const resp = await api.get(`/categories/${categoryId}/items/${id}`);
  return resp.data
}
