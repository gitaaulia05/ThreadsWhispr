import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import ThreadReplyInput from '../components/ThreadReplyInput';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncReceiveThreadDetail,
  asyncAddComment,
} from '../states/threadDetail/action';
import { postedAt } from '../utils';
import { stripHtml } from 'string-strip-html';
import { DetailSkeleton } from '../components/Skeleton';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, loadingBar } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onReplyThread = (text) => {
    dispatch(asyncAddComment({ threadId: id, content: text }));
  };

  const isLoading = loadingBar?.default > 0;

  if (isLoading && !threadDetail) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navigation />
        <DetailSkeleton />
      </div>
    );
  }

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />

      <main className="max-w-[800px] mx-auto px-4 py-12 flex-1 w-full">
        {/* Thread Content */}
        <ThreadDetail {...threadDetail} />

        {/* Discussion Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
            Discussion ({threadDetail.comments?.length || 0})
          </h3>

          <div className="space-y-8">
            {threadDetail.comments?.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="avatar-name flex items-center gap-2">
                        <img
                          src={comment.owner.avatar}
                          alt={comment.owner.name}
                          className="w-8 h-8 rounded-full border border-slate-200"
                        />
                        <span className="text-sm font-bold text-slate-900">
                          {comment.owner.name}
                        </span>
                      </div>

                      <span className="text-xs text-slate-500">
                        {postedAt(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {stripHtml(comment.content).result}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 px-2">
                    <button className="text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sticky Reply Input */}
        <ThreadReplyInput replyThread={onReplyThread} />
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

export default DetailPage;
