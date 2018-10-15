import axios from 'axios';

const defaultState = { loading: false };

// Action Types
const GET_IP = 'GET_IP';
const SET_IP = 'SET_IP';

// Action Creators
const getIP = () => ({ type: 'GET_IP', loading: true });

const setIp = ip => {
  console.log('inside setIP');
  return {
    type: SET_IP,
    ip,
  };
};

// Thunk Creators
// export const grabIp = () => async dispatch => {
// };

export const grabIp = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/users/ip');
    console.log('data should be', data);
    dispatch(setIp(data.data || 1));
  } catch (err) {
    console.error(err);
  }
  // try {
  //   const res = await axios.get('/auth/me');
  //   dispatch(getUser(res.data || defaultUser));
  // } catch (err) {
  //   console.error(err);
  // }
};

// Reducer
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_IP:
      return { ...state, loading: true };
    case SET_IP:
      return { ...state, ip: action.ip };
    default:
      return state;
  }
}
