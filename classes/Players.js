class Player {
  constructor() {
    this.won = false;
    this.positions = [null, null, null, null, null, null, null, null, null];
    this.prevMove = null;
    this.lastMove = null;
    this.nthMove = "0";
  }

  selectBox(box, bot) {
    if (this.won) return;
    if (bot.won) return;
    if (this.positions[box]) return null;
    if (bot.positions[box]) return null;
    this.positions[box] = true;
    this.prevMove = this.lastMove;
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
        if (Number(player.lastMove) % 2 !== 0) {
          switch (true) {
            case (player.prevMove === "0" && player.lastMove === "1") ||
              (player.prevMove === "8" && player.lastMove === "3"):
              this.positions[2] = true;
              this.lastMove = "2";
              break;
            case (player.prevMove === "0" && player.lastMove === "5") ||
              (player.prevMove === "8" && player.lastMove === "7"):
              this.positions[6] = true;
              this.lastMove = "6";
              break;
            case (player.prevMove === "2" && player.lastMove === "1") ||
              (player.prevMove === "6" && player.lastMove === "5"):
              this.positions[0] = true;
              this.lastMove = "0";
              break;
            case (player.prevMove === "2" && player.lastMove === "3") ||
              (player.prevMove === "6" && player.lastMove === "7"):
              this.positions[8] = true;
              this.lastMove = "8";
              break;
            default:
              break;
          }
        } else {
          switch (true) {
            case (player.prevMove === "0" && player.prevMove === "2") ||
              player.prevMove === "2" ||
              player.lastMove === "0":
              this.positions[1] = true;
              this.lastMove = "1";
              break;
            case (player.prevMove === "2" && player.prevMove === "8") ||
              player.prevMove === "8" ||
              player.lastMove === "2":
              this.positions[3] = true;
              this.lastMove = "3";
              break;
            case (player.prevMove === "0" && player.prevMove === "6") ||
              player.prevMove === "6" ||
              player.lastMove === "0":
              this.positions[5] = true;
              this.lastMove = "5";
              break;
            case (player.prevMove === "6" && player.prevMove === "8") ||
              player.prevMove === "8" ||
              player.lastMove === "6":
              this.positions[7] = true;
              this.lastMove = "7";
              break;
            default:
              this.positions[1] = true;
              this.lastMove = "1";
              break;
          }
        }
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
