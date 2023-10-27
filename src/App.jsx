import { useState, useEffect } from 'react';
import Progress from './component/Progress';
import './styles.css';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animateTimer = setTimeout(() => {
      setProgress(75);
    }, 2500);

    return () => clearTimeout(animateTimer);
  });

  return (
    <div className="progress-wrapper">
      <Progress value={progress} />
    </div>
  );
}

export default App;
