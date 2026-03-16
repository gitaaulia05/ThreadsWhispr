import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from '../LoginInput';
import '@testing-library/jest-dom';

/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    //arrange
    render(<LoginInput login={vi.fn()} />);
    const emailInput = screen.getByPlaceholderText('email');

    //action
    await userEvent.type(emailInput, 'test');

    //assert
    expect(emailInput).toHaveValue('test@example.com');
  });
  it('should handle password typing correctly', async () => {
    //arrange
    render(<LoginInput login={vi.fn()} />);
    const passwordInput = screen.getByPlaceholderText('Password');
    //action
    await userEvent.type(passwordInput, 'testpassword');

    //assert
    expect(passwordInput).toHaveValue('testpassword');
  });

  it('should call login function when login button is clicked', async () => {
    //arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'test@example.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'testpassword');
    const loginButton = await screen.getByRole('button', { name: /sign in/i });

    //action
    await userEvent.click(loginButton);

    //assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'testpassword',
    });
  });
});
