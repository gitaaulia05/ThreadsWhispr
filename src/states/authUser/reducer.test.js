import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';


/**
 * test scenario for authUserReducer
 *
 *  - should return null when given by UNSET_AUTH_USER action
 */

describe('authUserReducer function', () => {
  it('should return null when given by UNSET_AUTH_USER action', () => {
    const initialState = {
      id: 'users-1',
      name: 'Gita Aulia',
      email: 'gita@example.com',
    };
    
    const action = { 
      type: 'UNSET_AUTH_USER' 
    };

    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});