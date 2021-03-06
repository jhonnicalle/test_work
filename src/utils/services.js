import API from "./API"

const getUsers =  () => {
  return  API.get(`users/`)
  .then(res => res)
  .catch (error => {
    throw error
  })
}

const getUserByID = (id) => {
  return  API.get(`users/${id}`)
  .then(res => res)
  .catch (error => {
    throw error
  })
}

const editUser =  (id, data) => {
  return  API.put(`users/${id}`, data)
  .then(res => res)
  .catch (error => {
    throw error
  })
}

const eraseUser =  (id) => {
  return  API.delete(`users/${id}`)
  .then(res => res)
  .catch (error => {
    throw error
  })
}

const addUser =  (data) => {
  return  API.post(`users/`, data)
  .then(res => res)
  .catch (error => {
    throw error
  })
}

export {getUsers, getUserByID, editUser, eraseUser, addUser}