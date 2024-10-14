import { Component } from '@urso/core';

export class Controls extends Component {
  constructor() {
    super();
    this.template = /*html*/ `
      <div class="controls">
        <button on:click="emit('spin')">Spin</button>
        <button on:click="emit('maxBet')">Max Bet</button>
        <button on:click="emit('bet0.01')">Bet 0.01</button>
      </div>
    `;
  }
}