const userDefaultState = { 
  user: {} 
};

export default (state = userDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { 
        user: action.user
      };
    case 'LOGOUT':
      return userDefaultState;
    default:
      return state;
  }
};