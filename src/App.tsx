/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Opening } from './components/Opening';
import { WarpTransition } from './components/WarpTransition';
import { MainScreen } from './components/MainScreen';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [phase, setPhase] = useState<'opening' | 'warping' | 'main'>('opening');

  const handleEnter = () => {
    setPhase('warping');
  };

  const handleWarpComplete = () => {
    setPhase('main');
  };

  return (
    <div className="w-full h-full bg-space-900 overflow-hidden font-sans">
      {/* Background Music is always available, auto-starts might be blocked by browsers 
          until user interacts (which they do on the opening screen). */}
      <MusicPlayer src="https://working-cat.org/music/WORLD.mp3" />

      {phase === 'opening' && <Opening onEnter={handleEnter} />}
      {phase === 'warping' && <WarpTransition onComplete={handleWarpComplete} />}
      {phase === 'main' && <MainScreen />}
    </div>
  );
}
