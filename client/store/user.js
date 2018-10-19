import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {
  error: '',
  isAdmin: false,
};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const addUser = user => ({ type: ADD_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: UPDATE_USER, user });

/**
 * THUNK CREATORS
 */

export const update = user => async dispatch => {
  try {
    let { data } = await axios.post(`/api/users/update/`, user);
    console.log('data should be', data);
  } catch (err) {
    console.error(err);
  }
};
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me');
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/auth/${method}`, { email, password });
  } catch (authError) {
    console.log('auth error', authError.toString());
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push('/home');
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const register = user => async dispatch => {
  let response;
  if (user.password.length < 8) {
    return dispatch(getUser({ error: { password: true } }));
  }

  try {
    response = await axios.post('/api/users/signup', user);
  } catch (err) {
    return dispatch(getUser({ error: { email: true } }));
  }

  try {
    dispatch(addUser(response.data));
    history.push('/home');
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout');
    dispatch(removeUser());
    history.push('/login');
  } catch (err) {
    console.error(err);
  }
};

// export const grab = () => async dispatch => {
//   try {
//     const { data } = await axios.get('/api/users/ip');
//     console.log('data should be', data);
//     dispatch(setIP(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case ADD_USER:
      return action.user;
    default:
      return state;
  }
}
