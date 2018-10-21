import axios from 'axios';

/**
 * Default State
 */

const defaultState = {
  adminData: null,
};

/**
 * Action Types
 */

const LOAD_DATA = 'LOAD_DATA';

/**
 * Action Creators
 */

const loadData = data => {
  return {
    type: LOAD_DATA,
    adminData: data,
  };
};

/**
 * Thunk Creators
 */

export const loadAdmin = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/users/all');
    console.log('data should be', data);
    dispatch(loadData(data));
  } catch (err) {
    console.error(err);
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, adminData: action.adminData };
    default:
      return state;
  }
}
