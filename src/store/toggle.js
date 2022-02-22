const OPENED = 'toggle/OPENED';

export const opened = () => ({ type: OPENED });

const initialState = {
  isOpen: false,
};

function toggle(state = initialState, action) {
  switch (action.type) {
    case OPENED:
      return {
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export default toggle;
