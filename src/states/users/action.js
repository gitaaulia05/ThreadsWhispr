/**
 * @TODO: Define all the actions (creator) for the users state
 */

import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

import toast from 'react-hot-toast';

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
      toast.success('Account created successfully! Please login.');
    } catch (error) {
      toast.error(error.message);
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
