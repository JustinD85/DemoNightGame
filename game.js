class Game {
  constructor(inPlayers) {
    this.isGameOver = false;
    this.players = inPlayers || {};
    this.summons = {};
  }

  start() {

  }

  end() {

  }

  roll = (e, num) => {
    if (e === 0 && !num) return `You cannot roll, sorry`;
    (num || (num = 0));
    if (e < 1) return num + 3;
    num += Math.floor(Math.random() * 3) + 1;
    return roll(--e, num);
  }

  addPlayers = inP => this.players[inP.name] = inP;
}

/* https://www.ddo.com/en/character-stats-101 for explanations*/
class Player {
  constructor(inName, inRolls) {
    this.name = inName;
    this.str = inRolls.str || 10; //strength
    this.dex = inRolls.dex || 10; //dexterity
    this.con = inRolls.con || 10; //constitution
    this.int = inRolls.int || 10; //intelligence
    this.wis = inRolls.wis || 10; //wisdom
    this.cha = inRolls.cha || 10; //charisma
    this.ac = inRolls.ac || 10; //armor class
    this.ap = 0; //action points
    this.dodgeChance = 0; //Reflex Save
    this.physicalResist = 0; //Fortitude Save
    this.mentalResist = 0; //Will Save
  }
}

const game = new Game();
game.addPlayers(new Player('jazzy'));
game.addPlayers(new Player('gabe'));
game.addPlayers(new Player('duy'));