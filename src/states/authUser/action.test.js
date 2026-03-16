/**
 * Skenario pengujian untuk asyncSetAuthUser thunk
 *
 * - asyncSetAuthUser thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call toast error when data fetching failed
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { asyncSetAuthUser } from './action';
import api from '../../utils/api';
import toast from 'react-hot-toast';

vi.mock('../../utils/api');
vi.mock('react-hot-toast');

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    const mockToken = 'mock-token';
    const mockAuthUser = {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    api.login.mockResolvedValue(mockToken);
    api.putAccessToken.mockImplementation(() => {});
    api.getOwnProfile.mockResolvedValue(mockAuthUser);
    const dispatch = vi.fn();
    const getState = vi.fn().mockReturnValue({ authUser: null });

    // act
    await asyncSetAuthUser({ email: 'test@example.com', password: 'password' })(
      dispatch,
      getState
    );

    // assert
    expect(api.login).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    });
    expect(api.putAccessToken).toHaveBeenCalledWith(mockToken);
    // Should call api.getOwnProfile
    expect(api.getOwnProfile).toHaveBeenCalled();
    // Should dispatch setAuthUserActionCreator with auth user
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_AUTH_USER',
      payload: { authUser: mockAuthUser },
    });
  });

  it('should dispatch action and call toast error when data fetching failed', async () => {
    // Arrange
    const mockError = new Error('Email atau password salah');

    api.login.mockRejectedValue(mockError);

    const dispatch = vi.fn();
    const getState = vi.fn().mockReturnValue({ authUser: null });

    // act
    await asyncSetAuthUser({ email: 'test@example.com', password: 'password' })(
      dispatch,
      getState
    );

    // assert
    expect(toast.error).toHaveBeenCalledWith(mockError.message);
  });
});
