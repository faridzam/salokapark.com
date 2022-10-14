const defaultState = {
  progress: '',
  ticketOrder: {
    date: '',
    tickets: [],
  },
};

export default function(state=defaultState, action = {}) {
  switch(action.type) {
    case 'UPDATE':
      return {
        ...state,
        progress: action.text,
        ticketOrder: {
            ...state.foo,
            date: action.text,
            tickets: [{}],
        },
      };
    default:
      return state;
  }
}
