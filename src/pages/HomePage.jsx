import React, { useEffect } from 'react';
import ThreadInput from '../components/ThreadInput';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import Navigation from '../components/Navigation';
import { ThreadSkeleton } from '../components/Skeleton';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
    loadingBar
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const isLoading = loadingBar?.default > 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-4 py-12 flex-1 w-full">
        {/* Feed Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Discussions
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Join the conversation with the community
          </p>
        </div>

        <ThreadInput addThread={onAddThread} />

        <div className="flex flex-col gap-6 mt-8">
          {isLoading && threads.length === 0 ? (
            <>
              <ThreadSkeleton />
              <ThreadSkeleton />
              <ThreadSkeleton />
            </>
          ) : (
            <ThreadsList threads={threadList} />
          )}
        </div>

        {/* Floating Action Button (FAB) */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 border-4 border-white"
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            north
          </span>
        </button>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white mt-auto">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-primary/50 mb-4">
            <span className="material-symbols-outlined text-2xl">blur_on</span>
            <span className="font-black tracking-widest text-xs uppercase text-center">
              threadsWhispr
            </span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 threadsWhispr Interactive. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
