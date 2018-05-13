class Fighter {
  constructor(name = 'Johnny Cage', power = 1, health = 100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage) {
    this.health -= damage;
    console.log(`${this.name}'s health: ${this.health}`);
  }
}