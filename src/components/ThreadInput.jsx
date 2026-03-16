import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  function addthread() {
    if (title.trim() && body.trim()) {
      addThread({ title, body, category });
      setTitle('');
      setBody('');
      setCategory('');
    }
  }

  return (
    <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8 space-y-4'>
      <div className='flex items-center gap-3 mb-2'>
        <span className='material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg'>
          edit_note
        </span>
        <h3 className='text-lg font-bold text-slate-900'>Start a Discussion</h3>
      </div>

      <div className='space-y-3'>
        <input
          type='text'
          placeholder="What's the topic? (Title)"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          className='w-full bg-slate-50 border border-slate-100 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all'
        />

        <input
          type='text'
          placeholder='Category (e.g. Design, Tech)'
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          className='w-full bg-slate-50 border border-slate-100 rounded-lg py-2 px-4 text-xs focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all'
        />

        <textarea
          placeholder='Share your thoughts...'
          value={body}
          onChange={({ target }) => setBody(target.value)}
          className='w-full bg-slate-50 border border-slate-100 rounded-lg py-3 px-4 text-sm min-h-[120px] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none'
        />
      </div>

      <div className='flex justify-end'>
        <button
          type='button'
          onClick={addthread}
          className='bg-primary text-white font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2'
        >
          <span className='material-symbols-outlined text-xl'>send</span>
          Post Discussion
        </button>
      </div>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
