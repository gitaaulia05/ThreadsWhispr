import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';
import { stripHtml } from 'string-strip-html';

function ThreadItem({ id, title, body, createdAt, owner, totalComments }) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="group bg-white border border-slate-200 rounded-xl p-6 transition-all hover:border-primary/50 cursor-pointer shadow-sm hover:shadow-md"
      onClick={onThreadClick}
      onKeyDown={onThreadPress}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={owner.avatar}
            alt={owner.name}
            className="w-8 h-8 rounded-full border border-slate-200"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {owner?.name}
            </p>
            <p className="text-xs text-slate-500">{postedAt(createdAt)}</p>
          </div>
        </div>
        <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded">
          {id.split('-')[0]}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
        {stripHtml(body).result}
      </p>

      <div className="flex items-center gap-6 text-slate-500 text-sm border-t border-slate-50 pt-4 mt-2">
        <div className="flex items-center gap-2 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-lg">chat_bubble</span>
          <span>Comments</span>
        </div>
        <p className="text-xs text-slate-500">
          {' '}
          Total Comments {totalComments}
        </p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };
export default ThreadItem;
