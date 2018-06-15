export const userLogin = (user) => {
  return {
    type: 'LOGIN',
    authenticated: true,
    user
  }
}

export const userLogout = () => {
  return {
    type: 'LOGOUT'
  }
}