import { getUserByID, getUsers , editUser, addUser, eraseUser} from "../../utils/services"

export const GET_LIST_USERS_REQUEST = 'GET_LIST_USERS_REQUEST'
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const EDIT_USER_REQUEST = 'GET_USER_REQUEST'
export const CREATE_USER_REQUEST = 'GET_USER_REQUEST'
export const DELETE_USER_REQUEST = 'GET_USER_REQUEST'

export const getListUsers = () => async dispatch => {
  const respuesta = await getUsers();
  
  dispatch({
    type: GET_LIST_USERS_REQUEST,
    payload: respuesta
  })
}

export const getUser = (id) => async dispatch => {
  const respuesta = await getUserByID();
  
  dispatch({
    type: GET_USER_REQUEST,
    payload: respuesta
  })
}

export const editUserByID = (id, data) => async dispatch => {
  const respuesta = await editUser(id, data);
  
  dispatch({
    type: GET_USER_REQUEST,
    payload: respuesta
  })
}

export const createUser = (data) => async dispatch => {
  const respuesta = await addUser(data);
  dispatch({
    type: GET_USER_REQUEST,
    payload: respuesta
  })
}

export const deleteUser = (id) => async dispatch => {
  const respuesta = await eraseUser(id);
  dispatch({
    type: GET_USER_REQUEST,
    payload: respuesta
  })
}