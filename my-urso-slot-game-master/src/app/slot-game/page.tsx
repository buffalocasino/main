import { useEffect } from 'react';
import { createApp } from '@urso/core';
import { SlotBase } from '@urso-slot-base';
import { GameBoard } from '../../components/urso/GameBoard';
import { Controls } from '../../components/urso/Controls';
import { Status } from '../../components/urso/Status';

export default function SlotGame() {
  useEffect(() => {
    const app = createApp({
      components: {
        GameBoard,
        Controls,
        Status,
      },
    });

    app.use(SlotBase, {
      // SlotBase configuration options here
    });

    app.mount('#urso-app');

    // Handle events (example)
    app.on('spin', () => {
      // ... your game logic to update balance, win amount, etc.
      // const statusComponent = app.getComponent('Status') as Status;
      // statusComponent.setState({ balance: newBalance, win: newWinAmount }); 
    });

    // ... other event handlers

    return () => {
      app.destroy();
    };
  }, []);

  return (
    <main>
      <h1>Knight Quest</h1>
      <href=
      <div id="urso-app"></div>
    </main>
  );
}