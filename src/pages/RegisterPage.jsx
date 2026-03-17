import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';
import { useDispatch } from 'react-redux';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <div className='flex min-h-screen w-full bg-white font-display text-slate-900'>
      {/* Hero Section - Left Side */}
      <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/10'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-linear-to-tr from-primary/40 to-transparent'></div>
        </div>

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
              A Place where <br />
              <span className='text-primary italic'>Ideas</span> flourish <br />
              and Grow.
            </h2>
            <p className='text-slate-600 max-w-md text-lg leading-relaxed'>
              Be part of the most vibrant community of creators and thinkers.
              Start your journey with us today and share your unique perspective
              with the world.
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
            <h2 className='text-3xl font-black text-slate-900'>
              Create account
            </h2>
            <p className='text-slate-500 text-sm'>
              Join the community and start your journey today
            </p>
          </header>

          {/* Navigation Tabs */}
          <div className='flex bg-slate-100 p-1 rounded-xl'>
            <Link
              to='/login'
              className='flex-1 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors text-center'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='flex-1 py-2.5 text-sm font-bold bg-white text-slate-900 rounded-lg shadow-sm text-center'
            >
              Register
            </Link>
          </div>

          <RegisterInput register={onRegister} />

          <footer className='pt-8 border-t border-slate-100 text-center'>
            <p className='text-sm text-slate-500'>
              Already have an account?{' '}
              <Link
                to='/'
                className='font-bold text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4'
              >
                Log in here
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

export default RegisterPage;
