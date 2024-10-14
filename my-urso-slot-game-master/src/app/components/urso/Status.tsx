import { Component } from '@urso/core';

interface StatusState {
  balance: number;
  win: number;
}

export class Status extends Component<{}, StatusState> { 
  constructor() {
    super();
    this.template = /*html*/ `
      <div class="status">
        <div>Balance: {{ balance }}</div> 
        <div>Message Box</div> 
        <div>Win: {{ win }}</div> 
      </div>
    `;

    this.state = {
      balance: 100000000,
      win: 0,
    };
  }
}