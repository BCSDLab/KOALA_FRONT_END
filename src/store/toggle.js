const OPENED = 'toggle/OPENED';
const CLOSED = 'toggel/CLOSED';

export const opened = () => ({ type: OPENED });
export const closed = () => ({ type: CLOSED });

const initialState = {
  isOpen: null,
};

function toggle(state = initialState, action) {
  switch (action.type) {
    case OPENED:
      return {
        isOpen: !state.isOpen,
      };
    case CLOSED:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
}

export default toggle;
