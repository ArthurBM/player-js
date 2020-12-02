import Player from "./player.js";

const p1 = new Player({ playerId: 'player-1' })

window.addEventListener('load', p1.audioElement.play());