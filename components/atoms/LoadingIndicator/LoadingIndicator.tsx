import clsx from 'clsx';
import React from 'react';

interface LoadingIndicatorProps {
  /**
   * 0 - 1. 1 is 100%
   */
  progress?: number;
  indeterminate?: boolean;
  isLoading: boolean;
}

export function LoadingIndicator({
  progress = 0,
  indeterminate = false,
  isLoading,
}: LoadingIndicatorProps) {
  const percentages = `${progress * 100}%`;

  const progressBar = indeterminate ? (
    <div
      className={clsx(
        'LoadingIndicator__pill',
        'h-full bg-primary-400 w-1/3 absolute animate-pulse'
      )}
    />
  ) : (
    <div
      style={{ width: percentages }}
      className="h-full bg-primary-400 animate-pulse"
    />
  );
  return (
    <div className={clsx('w-full h-2 relative overflow-hidden')}>
      {isLoading && progressBar}
    </div>
  );
}
