class Fighter {
  constructor(name = 'Johnny Cage', power = 1, health = 100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage) {
    this.health -= damage;
    const healthMessage = (this.health > 0) ? (`${this.name}'s health: ${this.health}`) :
      (`${this.name} is dead (RIP)`);
    console.log(healthMessage);
  }

  hit(enemy, point) {
    const damage = this.power * point;
    enemy.setDamage(damage);
  }
}

class ImprovedFighter extends Fighter {
  constructor(name = 'Orion', power = 1, health = 100) {
    super(name, power, health);
  }

  doubleHit(enemy, point) {
    super.hit(enemy, point * 2);
  }
}

function fight(fighter, improvedFighter, ...points) {
  const getWinner = (fighterOne, fighterTwo) => {
    if (fighterOne.health < 1) {
      return fighterTwo.name;
    }

    if (fighterTwo.health < 1) {
      return fighterOne.name;
    }

    return null;
  };
  
  for (let i = 0; i < points.length; i += 1) {
    if (fighter.health > 0 && improvedFighter.health > 0) {
      fighter.hit(improvedFighter, points[i]);
      improvedFighter.doubleHit(fighter, points[i]);
    } else {
      break;
    }
  }

  console.log(`${getWinner(fighter, improvedFighter) || 'Friendship'} wins!`);
}

const fighter = new Fighter();
const improvedFighter = new ImprovedFighter();

fight(fighter, improvedFighter, 25, 13, 45); // Sub-Zero wins

const sonya = new Fighter('Sonya', 10, 1000);
const liuKang = new ImprovedFighter('Liu Kang');

fight(sonya, liuKang, 25, 13, 45); // Sonya wins

const scorpion = new Fighter('Scorpion');
const kano = new ImprovedFighter('Kano');

fight(scorpion, kano, 5); // Friendship wins
