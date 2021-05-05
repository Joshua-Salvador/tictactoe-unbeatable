const player = {
  won: false,
  positions: [false, false, false, false, false, false, false, false, false],
  lastMove: null,

  selectBox(box) {
    if (this.positions[box]) return null;
    if (bot.positions[box]) return null;
    this.positions[box] = true;
    this.lastMove = box;

    // call bot's select box method
  },

  /* Select Box Method
  
    get dom element
    insert "X" in selected dom element
   */

  /* Check if Win

    
  */
};

const bot = {
  won: false,
  positions: [false, false, false, false, false, false, false, false, false],
  lastMove: null,

  // bot's select box method

  // check if win
};
