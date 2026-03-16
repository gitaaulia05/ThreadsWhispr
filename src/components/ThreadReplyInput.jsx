import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadReplyInput({ replyThread }) {
  const [text, setText] = useState('');

  function replyThreadHandler() {
    if (text.trim()) {
      replyThread(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <section className="sticky bottom-8 bg-white/95 border border-slate-200 rounded-2xl p-6 shadow-2xl shadow-primary/5 backdrop-blur-md z-40">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold text-slate-900">
            Write a reply
          </label>
          <textarea
            className="w-full bg-transparent border-none focus:ring-0 p-0 text-slate-700 placeholder:text-slate-400 min-h-[80px] resize-none text-base"
            placeholder="Share your thoughts..."
            value={text}
            onChange={handleTextChange}
          />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={replyThreadHandler}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-primary/20"
            >
              Post Reply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
