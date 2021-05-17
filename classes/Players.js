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
    return this.lastMove;
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
    this.prevMove = null;
  }

  makeMove(player) {
    switch (player.nthMove) {
      // AI Trying to make "player.nthMove" move
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
        // Player's first move at corners
        if (
          Number(player.prevMove) % 2 === 0 &&
          Number(player.prevMove) !== 4
        ) {
          if (Number(player.lastMove) % 2 !== 0) {
            // Player's second move is at the edges
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
            // Player's second move is at the corners
            switch (true) {
              case (player.prevMove === "0" && player.lastMove === "2") ||
                (player.prevMove === "2" && player.lastMove === "0"):
                this.positions[1] = true;
                this.lastMove = "1";
                break;
              case (player.prevMove === "2" && player.lastMove === "8") ||
                (player.prevMove === "8" && player.lastMove === "2"):
                this.positions[3] = true;
                this.lastMove = "3";
                break;
              case (player.prevMove === "0" && player.lastMove === "6") ||
                (player.prevMove === "6" && player.lastMove === "0"):
                this.positions[5] = true;
                this.lastMove = "5";
                break;
              case (player.prevMove === "6" && player.lastMove === "8") ||
                (player.prevMove === "8" && player.lastMove === "6"):
                this.positions[7] = true;
                this.lastMove = "7";
                break;
              default:
                this.positions[1] = true;
                this.lastMove = "1";
                break;
            }
          }
        } else if (Number(player.prevMove) === 4) {
          // Player's first move is the center
          switch (true) {
            case player.lastMove === "1":
              this.positions[7] = true;
              this.lastMove = "7";
              break;
            case player.lastMove === "3":
              this.positions[5] = true;
              this.lastMove = "5";
              break;
            case player.lastMove === "5":
              this.positions[3] = true;
              this.lastMove = "3";
              break;
            case player.lastMove === "7":
              this.positions[1] = true;
              this.lastMove = "1";
              break;
            case player.lastMove === "2":
              this.positions[6] === true;
              this.lastMove = "6";
              break;
            case player.lastMove === "6" || player.lastMove === "8":
              this.positions[2] = true;
              this.lastMove = "2";
              break;
            default:
              break;
          }
        } else {
          // Player's first move is edge boxes
          switch (true) {
            case (player.prevMove === "1" && player.lastMove === "2") ||
              (player.prevMove === "5" && player.lastMove === "6"):
              this.positions[0] = true;
              this.lastMove = "0";
              break;
            case (player.prevMove === "1" && player.lastMove === "0") ||
              (player.prevMove === "3" && player.lastMove === "8"):
              this.positions[2] = true;
              this.lastMove = "2";
              break;
            case (player.prevMove === "5" && player.lastMove === "0") ||
              (player.prevMove === "7" && player.lastMove === "8"):
              this.positions[6] = true;
              this.lastMove = "6";
              break;
            case (player.prevMove === "3" && player.lastMove === "2") ||
              (player.prevMove === "7" && player.lastMove === "6"):
              this.positions[8] = true;
              this.lastMove = "8";
              break;
            default:
              break;
          }
        }
        break;
      case "3":
        switch (true) {
          // Cases where AI's last move is at "X"
          case this.lastMove === "0":
            switch (true) {
              case player.lastMove === "8":
                this.positions[3] = true;
                this.lastMove = "3";
                break;
              default:
                this.positions[8] = true;
                this.lastMove = "8";
                this.won = true;
                break;
            }
            break;
          case this.lastMove === "1":
            switch (true) {
              case player.lastMove === "7" && player.prevMove === "8":
                this.positions[6] = true;
                this.lastMove = "6";
                break;
              case player.lastMove === "7":
                this.positions[3] = true;
                this.lastMove = "3";
                break;
              default:
                this.positions[7] = true;
                this.lastMove = "7";
                this.won = true;
                break;
            }
            break;
          case this.lastMove === "2":
            switch (true) {
              case player.lastMove === "6" &&
                (player.prevMove === "1" || player.prevMove === "0"):
                this.positions[5] = true;
                this.lastMove = "5";
                break;
              case player.lastMove === "6" &&
                (player.prevMove === "3" || player.prevMove === "8"):
                this.positions[7] = true;
                this.lastMove = "7";
                break;
              default:
                this.positions[6] = true;
                this.lastMove = "6";
                this.won = true;
                break;
            }
            break;
          case this.lastMove === "3":
            switch (true) {
              case player.lastMove === "7":
                this.positions[1] = true;
                this.lastMove = "1";
                break;
              case player.lastMove === "1":
                this.positions[7] = true;
                this.lastMove = "7";
                break;
              case player.lastMove === "2":
                this.positions[6] = true;
                this.lastMove = "6";
                break;
              default:
                this.positions[2] = true;
                this.lastMove = "2";
                break;
            }
            break;
          // case this.lastMove === "4":
          //   break;
          case this.lastMove === "5":
            switch (true) {
              case player.lastMove === "6":
                this.positions[2] = true;
                this.lastMove = "2";
                break;
              default:
                this.positions[6] = true;
                this.lastMove = "6";
                this.won = true;
                break;
            }
            break;
          case this.lastMove === "6":
            switch (true) {
              case player.lastMove === "2":
                if (player.prevMove === "0" || player.prevMove === "5") {
                  this.positions[1] = true;
                  this.lastMove = "1";
                } else if (player.prevMove === "7" || player.prevMove === "8") {
                  this.positions[3] = true;
                  this.lastMove = "3";
                }
                break;
              case player.lastMove === "5" &&
                !(player.positions[5] || player.positions[7]):
                this.positions[3] = true;
                this.lastMove = "3";
                break;
              case player.lastMove !== "2" &&
                (player.positions[5] || player.positions[7]):
                this.positions[2] = true;
                this.lastMove = "2";
                this.won = true;
                break;
              case player.lastMove !== "5":
                this.positions[5] = true;
                this.lastMove = "5";
                this.won = true;
                break;
              default:
                break;
            }
            break;
          case this.lastMove === "7":
            switch (true) {
              case this.positions[4]:
                switch (player.lastMove) {
                  case "1":
                    this.positions[3] = true;
                    this.lastMove = "3";
                    break;
                  default:
                    this.positions[1] = true;
                    this.lastMove = "1";
                    this.won = true;
                    break;
                }
                break;
              case this.positions[0]:
                switch (player.lastMove) {
                  case "2":
                    this.positions[6] = true;
                    this.lastMove = "6";
                    break;
                  case "3":
                    this.positions[5] = true;
                    this.lastMove = "5";
                    break;
                  case "5":
                    this.positions[3] = true;
                    this.lastMove = "3";
                    break;
                  case "6":
                    this.positions[2] = true;
                    this.lastMove = "2";
                    break;
                  default:
                    this.positions[6] = true;
                    this.lastMove = "6";
                    break;
                }
                break;
            }
            break;
          case this.lastMove === "8":
            switch (player.lastMove) {
              case "0":
                switch (player.prevMove) {
                  case "2" || "3":
                    this.positions[1] = true;
                    this.lastMove = "1";
                    break;
                  case "7" || "8":
                    this.positions[5] = true;
                    this.lastMove = "5";
                    break;
                  default:
                    break;
                }
                break;
              default:
                this.positions[0] = true;
                this.lastMove = "0";
                this.won = true;
                break;
            }
            break;
          default:
            break;
        }
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
    return this.lastMove;
  }
}
