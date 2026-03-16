import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import Navigation from '../Navigation';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

expect.extend(matchers);

/**
 * - Logout testing
 *   - should display button sign out correctly
 *   - should call function onSignOut when button sign out is clicked
 */

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.mock('../../states/authUser/action', () => ({
  asyncUnsetAuthUser: vi.fn(),
}));

describe('Navigation component', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    reactRedux.useDispatch.mockReturnValue(mockDispatch);

    reactRedux.useSelector.mockImplementation(() => ({
      id: 'johndoe123',
      name: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    }));
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render the Sign out button correctly', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const signOutButton = screen.getByRole('button', { name: /sign out/i });
    expect(signOutButton).toBeInTheDocument();
  });

  it('should dispatch asyncUnsetAuthUser when Sign out button is clicked', async () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const signOutButton = screen.getByRole('button', { name: /sign out/i });

    await userEvent.click(signOutButton);

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    expect(asyncUnsetAuthUser).toHaveBeenCalled();
  });
});
