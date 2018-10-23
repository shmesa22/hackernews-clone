const actionTypes = {
  SET_THEME: 'SET_THEME',
};

const actions = {
  setTheme: (payload = {}) => ({
    type: actionTypes.SET_THEME,
    payload,
  }),
};

export {
  actionTypes,
};

export default actions;
