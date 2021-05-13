class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;

  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }

}

// Player - class
// getCount() - fn

// var p;
// var q;
// p = new Player()   /obj
// q = new Player()  /obj

// //sketch.js

// p.getCount();
// q.getCount();

// static getPlayerInfo(){

// }

// Player.getPlayerInfo();

