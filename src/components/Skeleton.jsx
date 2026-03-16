import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ThreadSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Skeleton circle width={40} height={40} />
          <div>
            <Skeleton width={120} height={16} />
            <Skeleton width={80} height={12} />
          </div>
        </div>
        <Skeleton width={60} height={20} />
      </div>
      <Skeleton height={28} className="mb-2" />
      <Skeleton count={2} height={16} />
      <div className="border-t border-slate-50 pt-4 mt-4">
        <Skeleton width={100} height={16} />
      </div>
    </div>
  );
}

function DetailSkeleton() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12 w-full">
      <div className="flex items-center gap-4 mb-6">
        <Skeleton circle width={48} height={48} />
        <div className="flex-1">
          <Skeleton width={150} height={20} />
          <Skeleton width={100} height={14} />
        </div>
      </div>
      <Skeleton height={48} className="mb-8" />
      <div className="space-y-4 mb-12">
        <Skeleton count={5} height={20} />
      </div>
      <div className="border-t border-b border-slate-200 py-8 mb-12">
        <Skeleton width={120} height={24} />
      </div>
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton circle width={32} height={32} />
            <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <Skeleton width={100} height={16} />
                <Skeleton width={60} height={12} />
              </div>
              <Skeleton count={2} height={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ThreadSkeleton, DetailSkeleton };
export default ThreadSkeleton;
