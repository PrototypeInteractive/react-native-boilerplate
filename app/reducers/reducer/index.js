import { SET_ACTION } from '../../actions/action/index';

const initValue = {
  action: 0,
};

export default function Action(state = initValue, action) {
  switch (action.type) {
    case SET_ACTION:
      return {
        ...state,
        action: action.action,
      };
    default:
      return state;
  }
}
