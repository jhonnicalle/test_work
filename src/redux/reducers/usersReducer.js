



const initialState = {
  users: [],
  isFetching: false
}

const users = (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default users