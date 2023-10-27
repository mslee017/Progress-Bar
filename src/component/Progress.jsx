import React from 'react';
import { clamp } from '../utils/clamp';

const Progress = ({ value, maxValue = 100 }) => {
  const clampValue = clamp(value, 0, maxValue);
  const clampPercent = (clampValue / maxValue) * 100;

  return (
    <div
      className="progress-base"
      role="progressbar"
      aria-valuenow={clampPercent}
    >
      <div
        className="progress-indicator"
        style={{ transform: `translateX(-${100 - clampPercent}%)` }}
      ></div>
    </div>
  );
};

export default Progress;
