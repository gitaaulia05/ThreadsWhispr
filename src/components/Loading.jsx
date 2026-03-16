import React from 'react';
import LoadingBar from '@dimasmds/react-redux-loading-bar';

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <LoadingBar className="h-1 bg-primary shadow-[0_0_10px_rgba(6,188,249,0.5)]" />
    </div>
  );
}

export default Loading;
