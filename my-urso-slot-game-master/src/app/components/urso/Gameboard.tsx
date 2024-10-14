import { Component } from '@urso/core';
import { Reel } from '@urso/slot-base';

export class GameBoard extends Component {
  constructor() {
    super();
    this.template = /*<html>

     <head>
    
      <title>
    
       Knight Quest
    
      </title>
    
      <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js" type="module">
    
      </script>
    
      <script nomodule="" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js">
    
      </script>
    
      <link href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" rel="stylesheet"/>
    
      <script src="https://cdn.tailwindcss.com">
    
      </script>
    
      <style>
    
       body {
    
                background-color: #2b2b2b;
    
                font-family: 'Arial', sans-serif;
    
            }
    
            .container {
    
                max-width: 800px;
    
                margin: 0 auto;
    
                padding: 20px;
    
                background-color: #fff;
    
                border-radius: 10px;
    
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    
            }
    
            .header {
    
                text-align: center;
    
                font-size: 2rem;
    
                color: #ff00ff;
    
                margin-bottom: 20px;
    
            }
    
            .game-board {
    
                display: grid;
    
                grid-template-columns: repeat(5, 1fr);
    
                gap: 10px;
    
                background-color: #4b0082;
    
                padding: 10px;
    
                border-radius: 10px;
    
            }
    
            .game-board img {
    
                width: 100%;
    
                border-radius: 10px;
    
            }
    
            .controls {
    
                display: flex;
    
                justify-content: space-between;
    
                margin-top: 20px;
    
            }
    
            .controls button {
    
                background-color: #ff4500;
    
                color: #fff;
    
                border: none;
    
                padding: 10px 20px;
    
                border-radius: 5px;
    
                cursor: pointer;
    
            }
    
            .controls button:hover {
    
                background-color: #ff6347;
    
            }
    
            .status {
    
                display: flex;
    
                justify-content: space-between;
    
                margin-top: 10px;
    
                color: #fff;
    
            }
    
      </style>
    
     </head>
    
     <body>
    
      <div class="container">
    
       <div class="header">
    
        Knight Quest
    
       </div>
    
       <div class="game-board">
    
        <img alt="Castle with 'WILD' text" height="100" src="https://storage.googleapis.com/a1aa/image/5rN3OUpf56QLQCGrtpm0PMecdB26qZM8bToQTx3UmyOaaqmTA.jpg" width="100"/>
    
        <img alt="Golden gauntlet" height="100" src="https://storage.googleapis.com/a1aa/image/5OAt11eIBRSsKi3syppsukv2vkNI5gLiSodUZ5450a7JNVzJA.jpg" width="100"/>
    
        <img alt="Golden goblet" height="100" src="https://storage.googleapis.com/a1aa/image/0V2BqPXR8S7vOd6zbx7P5q6gezlGtbWSchRVydWGHOoMNVzJA.jpg" width="100"/>
    
        <img alt="Knight on horse" height="100" src="https://storage.googleapis.com/a1aa/image/FusQ121gkIIvItYql45yeKHNwzagS7f3EPZdQxZ8PRGe0UNnA.jpg" width="100"/>
    
        <img alt="Knight" height="100" src="https://storage.googleapis.com/a1aa/image/vDMbN6vasTKvKt9JcAfesqsd56are0rVISrJ5fsHLekMST1cC.jpg" width="100"/>
    
        <img alt="Crossed swords and shield" height="100" src="https://storage.googleapis.com/a1aa/image/Dm3c3aKcL5YkBBJWZdc7tITynRjzu5SfpzNfJfolaKlq0UNnA.jpg" width="100"/>
    
        <img alt="Castle with 'WILD' text" height="100" src="https://storage.googleapis.com/a1aa/image/5rN3OUpf56QLQCGrtpm0PMecdB26qZM8bToQTx3UmyOaaqmTA.jpg" width="100"/>
    
        <img alt="Golden gauntlet" height="100" src="https://storage.googleapis.com/a1aa/image/5OAt11eIBRSsKi3syppsukv2vkNI5gLiSodUZ5450a7JNVzJA.jpg" width="100"/>
    
        <img alt="Golden goblet" height="100" src="https://storage.googleapis.com/a1aa/image/0V2BqPXR8S7vOd6zbx7P5q6gezlGtbWSchRVydWGHOoMNVzJA.jpg" width="100"/>
    
        <img alt="Golden armor" height="100" src="https://storage.googleapis.com/a1aa/image/2CT7XJZfP40ERarPRZpRIfPrHC4jDPIUe7Ptctx0IjLu0UNnA.jpg" width="100"/>
    
        <img alt="Knight helmet" height="100" src="https://storage.googleapis.com/a1aa/image/hFpYAKM0Rj6tINBGqeSLoWoatz1vgUKbfyH9steDpTt20UNnA.jpg" width="100"/>
    
        <img alt="Bearded knight" height="100" src="https://storage.googleapis.com/a1aa/image/pdO5UAtp5t75GFT6zCEHn3xcigIojpildlIcBcWf585ONVzJA.jpg" width="100"/>
    
        <img alt="Princess" height="100" src="https://storage.googleapis.com/a1aa/image/SAbq5GjK2E69ABPlrYJ6I9WvOIL4BrVBm0hfj9vI1gbKNVzJA.jpg" width="100"/>
    
        <img alt="Golden goblet" height="100" src="https://storage.googleapis.com/a1aa/image/0V2BqPXR8S7vOd6zbx7P5q6gezlGtbWSchRVydWGHOoMNVzJA.jpg" width="100"/>
    
        <img alt="Golden armor" height="100" src="https://storage.googleapis.com/a1aa/image/2CT7XJZfP40ERarPRZpRIfPrHC4jDPIUe7Ptctx0IjLu0UNnA.jpg" width="100"/>
    
       </div>
    
       <div class="controls">
    
        <button>
    
         Max Bet
    
        </button>
    
        <button>
    
         Bet 0.01
    
        </button>
    
        <button>
    
         Clear All
    
        </button>
    
        <button>
    
         Auto
    
        </button>
    
        <button>
    
         Stop Auto
    
        </button>
    
        <button>
    
         Spin
    
        </button>
    
       </div>
    
       <div class="status">
    
        <div>
    
         Balance: 100,000,000
    
        </div>
    
        <div>
    
         Message Box
    
        </div>
    
        <div>
    
         Win: 100,000
    
        </div>
    
       </div>
    
      </div>
    
      <script type="module">
    
       import ionicons from 'https://cdn.jsdelivr.net/npm/ionicons/+esm'
    
      </script>
    
      <script nomodule="" src="https://cdn.jsdelivr.net/npm/ionicons/dist/esm/ionicons.min.js">
    
      </script>
    
      <link href="https://cdn.jsdelivr.net/npm/ionicons/dist/collection/components/icon/icon.min.css" rel="stylesheet"/>
    
     </body>
    
    </html>*/ `
      <div class="game-board">
        <urso-reel></urso-reel>
        <urso-reel></urso-reel>
        <urso-reel></urso-reel> 
      </div>
    `;
  }
}