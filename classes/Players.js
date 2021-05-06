class Player {
  constructor() {
    this.won = false;
    this.positions = [null, null, null, null, null, null, null, null, null];
    this.lastMove = null;
    this.nthMove = "0";
  }

  selectBox(box, bot) {
    if (this.won) return;
    if (bot.won) return;
    if (this.positions[box]) return null;
    if (bot.positions[box]) return null;
    this.positions[box] = true;
    this.lastMove = box;
    this.nthMove = String(++this.nthMove);
    console.log(this);
  }

  checkIfWin() {
    if (
      (this.positions[0] && this.positions[1] && this.positions[2]) ||
      (this.positions[0] && this.positions[5] && this.positions[6]) ||
      (this.positions[0] && this.positions[4] && this.positions[8]) ||
      (this.positions[1] && this.positions[4] && this.positions[7]) ||
      (this.positions[2] && this.positions[3] && this.positions[8]) ||
      (this.positions[3] && this.positions[4] && this.positions[5]) ||
      (this.positions[6] && this.positions[7] && this.positions[8])
    ) {
      return (this.won = true);
    }
    return;
  }
}

class AI {
  constructor() {
    this.won = false;
    this.positions = [null, null, null, null, null, null, null, null, null];
    this.lastMove = null;
  }

  makeMove(player) {
    switch (player.nthMove) {
      case "1":
        if (player.lastMove !== "4") {
          this.positions[4] = true;
          this.lastMove = "4";
        } else {
          this.positions[0] = true;
          this.lastMove = "0";
        }
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      default:
        console.log("default case");
        break;
    }

    console.log(this, player.nthMove);
  }
}
