import axios from 'axios';

const defaultState = { ip: 0, loading: false, servers: [] };

// Action Types
const GET_IP = 'GET_IP';
const SET_IP = 'SET_IP';
const GET_SERVERS = 'GET_SERVERS';
const SET_SERVERS = 'SET_SERVERS';

// Action Creators
const getIP = () => ({ type: 'GET_IP', loading: true });
const setIp = ip => ({ type: SET_IP, ip });
const setServers = servers => ({ type: 'SET_SERVERS', servers });

// Thunk Creators
// export const grabIp = () => async dispatch => {
// };

export const grabIp = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/users/ip');
    dispatch(setIp(data || 1));
  } catch (err) {
    console.error(err);
  }
};

export const grabServers = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/servers/all');
    dispatch(setServers(data));
  } catch (err) {
    console.log(err);
  }
};

// Reducer
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_IP:
      return { ...state, loading: true };
    case SET_IP:
      return { ip: action.ip, loading: false };
    case GET_SERVERS:
      return { ...state, loading: true };
    case SET_SERVERS:
      return { ...state, servers: action.servers, loading: false };
    default:
      return state;
  }
}
