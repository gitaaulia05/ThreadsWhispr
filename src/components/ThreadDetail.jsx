import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { stripHtml } from 'string-strip-html';

function ThreadDetail({ id, title, body, createdAt, owner }) {
  return (
    <article className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img
              src={owner.avatar}
              alt={owner.name}
              className="w-8 h-8 rounded-full border border-slate-200"
            />
            <h3 className="font-bold text-slate-900">{owner.name}</h3>
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
              {id.split('-')[0]}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            @{owner.id} • {postedAt(createdAt)}
          </p>
        </div>
        <button className="text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
        {title}
      </h1>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg space-y-6">
        <p>{stripHtml(body).result}</p>
      </div>

      <div className="flex items-center justify-between py-8 mt-8 border-t border-b border-slate-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined font-light">
              chat_bubble
            </span>
            <span className="text-sm font-semibold">Discussion</span>
          </button>
        </div>
      </div>
    </article>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

export default ThreadDetail;
