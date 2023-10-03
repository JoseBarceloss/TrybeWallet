import { ActionEmailType } from '../../types/type';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action: ActionEmailType) {
  switch (action.type) {
    case 'USER_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
