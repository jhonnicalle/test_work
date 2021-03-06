import {CREATE_USER_REQUEST, DELETE_USER_REQUEST, EDIT_USER_REQUEST, GET_LIST_USERS_REQUEST, GET_USER_REQUEST} from '../actions/usersActions'

const initialState = {
  users: [],
  userById: {},
  // isFetching: false,
  id: null,
  error: null
}

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_USERS_REQUEST:
      return {
        ...state,
        users: payload
      }
    case GET_USER_REQUEST:
      return  {
        ...state,
        userById: payload
      }
    case EDIT_USER_REQUEST:
      return  {
        ...state,
        users: payload
      }
    case CREATE_USER_REQUEST:
      return  {
        ...state,
        users: payload
      }

    case DELETE_USER_REQUEST:
      return  {
        ...state,
        users: state.users.filter(item => item.id !== payload)
      }
    // case GET_LIST_USERS_ERROR:
    //   return  {
    //     ...state,
    //     isFetching: false,
    //     error: payload.error
    //   }
    default:
      return state
  }
}

export default users