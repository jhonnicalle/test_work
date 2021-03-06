import API from "./API"

const endpoints = {
  users: {
    get_users: 'users/'
  }
}

export const getUsers = async () => {
  await API.get(endpoints.users.get_users)
  .then(res => { alert(res)})
  .catch (error => {
    return error
  })
}

// export {getUsers}