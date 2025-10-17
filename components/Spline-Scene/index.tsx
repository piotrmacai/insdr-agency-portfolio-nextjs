"use client";

import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string; // URL to the .spline scene
  className?: string;
  onLoad?: (spline: any) => void;
}

export const SplineScene = ({ scene, className = '', onLoad }: SplineSceneProps) => {
  const spline = useRef<any>();

  return (
    <div className={`w-full h-full ${className}`}>
      <Spline
        scene={scene}
        onLoad={(splineApp) => {
          spline.current = splineApp;
          if (onLoad) onLoad(splineApp);
        }}
      />
    </div>
  );
};

export default SplineScene;