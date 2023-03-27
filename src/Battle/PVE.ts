import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  override fight(): number {
    while (this._player.lifePoints > 0 && this._enemies.length > 0) {
      this._player.attack(this._enemies[0]);
      this._enemies[0].attack(this._player);

      if (this._enemies[0].lifePoints <= 0) {
        this._enemies.shift();
      }
    }
    
    return super.fight();
  }
}