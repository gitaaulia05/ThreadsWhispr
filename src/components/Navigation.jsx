import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!authUser) return null;

  const { id, avatar, name } = authUser;

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser(navigate));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-[960px] mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl">adjust</span>
            <h2 className="text-slate-900 text-lg font-bold tracking-tight text-center">
              threadsWhispr
            </h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-primary text-sm font-semibold">
              Home
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                alt={name}
                className="w-8 h-8 rounded-full border border-slate-200"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">
                  {name}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">@{id}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-slate-200">
              <button
                type="button"
                onClick={onSignOut}
                className="text-xs font-bold text-slate-500 hover:text-red-500 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
