import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className='flex min-h-screen w-full bg-white font-display text-slate-900'>
      {/* Hero Section - Left Side */}
      <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/10'>
        <div className='relative z-10 flex flex-col justify-between p-12 text-slate-900'>
          <div className='flex items-center gap-3'>
            <span
              className='material-symbols-outlined text-5xl text-primary'
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              adjust
            </span>
            <h1 className='text-3xl font-black tracking-tight'>
              threadsWhispr
            </h1>
          </div>

          <div className='space-y-6'>
            <h2 className='text-5xl font-black leading-tight'>
              Connect with the <br />
              <span className='text-primary italic'>Best Minds</span> in the{' '}
              <br />
              Industry.
            </h2>
            <p className='text-slate-600 max-w-md text-lg leading-relaxed'>
              Join our growing community of developers and enthusiasts. Share
              knowledge, ask questions, and build the future together.
            </p>
          </div>

          <div className='flex gap-4 text-sm font-medium text-slate-400'>
            <span>© 2026 threadsWhispr. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Form Section - Right Side */}
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-slate-50/50'>
        <div className='w-full max-w-[420px] space-y-8 bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100'>
          <header className='space-y-2 text-center'>
            <div className='lg:hidden flex items-center justify-center gap-2 text-primary mb-6'>
              <span
                className='material-symbols-outlined text-4xl'
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                adjust
              </span>
              <h1 className='text-2xl font-black tracking-tight text-slate-900'>
                threadsWhispr
              </h1>
            </div>
            <h2 className='text-3xl font-black text-slate-900'>Welcome back</h2>
            <p className='text-slate-500 text-sm'>
              Please enter your credentials to access your account
            </p>
          </header>

          {/* Navigation Tabs */}
          <div className='flex bg-slate-100 p-1 rounded-xl'>
            <Link
              to='/'
              className='flex-1 py-2.5 text-sm font-bold bg-white text-slate-900 rounded-lg shadow-sm text-center'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='flex-1 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors text-center'
            >
              Register
            </Link>
          </div>

          <LoginInput login={onLogin} />

          <footer className='pt-8 border-t border-slate-100 text-center'>
            <p className='text-sm text-slate-500'>
              {"Don't have an account?"}{' '}
              <Link
                to='/register'
                className='font-bold text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4'
              >
                Join the community
              </Link>
            </p>
          </footer>
        </div>

        {/* Mobile Utility Links */}
        <div className='mt-8 flex gap-6 text-xs font-medium text-slate-400'>
          <a href='#' className='hover:text-primary transition-colors'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-primary transition-colors'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-primary transition-colors'>
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
