export default (state, action) => {
  if (action.type === "USER_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOADED") {
    return {
      ...state,
      isAuth: true,
      isLoading: false,
      user: action.payload,
      balance: action.payload.balance,
    };
  } else if (action.type === "LOGIN_SUCCESS") {
    localStorage.setItem("token", action.payload.token);
    return {
      ...state,
      ...action.payload,
      isAuth: true,
      isLoading: false,
    };
  } else if (action.type === "REGISTER_SUCCESS") {
    localStorage.setItem("token", action.payload.token);
    return {
      ...state,
      ...action.payload,
      isAuth: false,
      isLoading: false,
    };
  } else if (action.type === "BALANCE_SET") {
    return {
      ...state,
      isAuth: true,
      balance: action.payload,
    };
  } else if (action.type === "BALANCE_SKIPPED") {
    return {
      ...state,
      isAuth: true,
      balance: 2000,
    };
  } else if (
    action.type === "AUTH_ERROR" ||
    action.type === "LOGIN_OUT" ||
    action.type === "LOGOUT_SUCCESS" ||
    action.type === "REGISTER_FAIL"
  ) {
    localStorage.removeItem("token");
    return {
      ...state,
      token: null,
      user: null,
      isAuth: false,
      isLoading: false,
    };
  } else {
    return state;
  }
};

//in case of emergency (...state)