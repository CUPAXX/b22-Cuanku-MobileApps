const initialState = {
  token: null,
  errMsg: '',
  succMsg: '',
  notifToken: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
        errMsg: '',
      };
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        succMsg: action.payload,
      };
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_NOTIF_TOKEN': {
      return {
        ...state,
        notifToken: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        errMsg: '',
        succMsg: '',
      };
    }
    case 'AUTH_RESET': {
      return {
        ...state,
        token: null,
        errMsg: '',
        sccMsg: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default auth;
