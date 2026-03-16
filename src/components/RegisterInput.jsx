import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  // const [id, onIdChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [email, onEmailChange] = useInput('');

  return (
    <form className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <label
          className="block text-sm font-semibold text-slate-700"
          htmlFor="name"
        >
          Full Name
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            person
          </span>
          <input
            className="w-full pl-11 pr-4 h-12 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400"
            id="name"
            placeholder="John Doe"
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </div>
      </div>
      {/* Email Field */}
      <div className="space-y-2">
        <label
          className="block text-sm font-semibold text-slate-700"
          htmlFor="email"
        >
          Email Address
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            mail
          </span>
          <input
            className="w-full pl-11 pr-4 h-12 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400"
            id="email"
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={onEmailChange}
          />
        </div>
      </div>
      {/* Password Field */}
      <div className="space-y-2">
        <label
          className="block text-sm font-semibold text-slate-700"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            lock
          </span>
          <input
            className="w-full pl-11 pr-12 h-12 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400"
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <span className="material-symbols-outlined text-[20px]">
              visibility
            </span>
          </button>
        </div>
      </div>
      {/* Submit Button */}
      <button
        type="button"
        onClick={() => register({ name, email, password })}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
      >
        Register
        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
