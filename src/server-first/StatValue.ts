import Stat from "./Stat";

export default class StatValue {
  constructor(public stat:Stat, public value:number) {
  }
}

// public static Agility = new Stat('Agility','agi');
// public static Intellect = new Stat('Intellect','int');
// public static Stamina = new Stat('Stamina','stam');
// public static Strength = new Stat('Strength','str');

// public static Armor = new Stat('Armor','arm');
// public static CriticalRating = new Stat('Critical Rating','crit');
// public static DefenseRating = new Stat('Defense Rating','def');
// public static Haste = new Stat('Haste','hst');
// public static HitRating = new Stat('Hit Rating','hit');
// public static Resistance = new Stat('Resistance','res');
// public static Spirit = new Stat('Spirit','spr');

export function createStats(stats: {
  agility?: number, intellect?: number, stamina?: number, strength?: number,
  armor?: number, criticalRating?: number, defenseRating?: number, haste?: number, hitRating?: number, resistance?: number, spirit?: number
}) : StatValue[] {
  const result: StatValue[] = [];

  if (stats.armor !== undefined) {
    result.push(new StatValue(Stat.Armor, stats.armor));
  }

  if (stats.criticalRating !== undefined) {
    result.push(new StatValue(Stat.CriticalRating, stats.criticalRating));
  }

  if (stats.defenseRating !== undefined) {
    result.push(new StatValue(Stat.DefenseRating, stats.defenseRating));
  }

  if (stats.haste !== undefined) {
    result.push(new StatValue(Stat.Haste, stats.haste));
  }

  if (stats.hitRating !== undefined) {
    result.push(new StatValue(Stat.HitRating, stats.hitRating));
  }

  if (stats.resistance !== undefined) {
    result.push(new StatValue(Stat.Resistance, stats.resistance));
  }

  if (stats.spirit !== undefined) {
    result.push(new StatValue(Stat.Spirit, stats.spirit));
  }

  if (stats.agility !== undefined) {
    result.push(new StatValue(Stat.Agility, stats.agility));
  }

  if (stats.intellect !== undefined) {
    result.push(new StatValue(Stat.Intellect, stats.intellect));
  }

  if (stats.stamina !== undefined) {
    result.push(new StatValue(Stat.Stamina, stats.stamina));
  }

  if (stats.strength !== undefined) {
    result.push(new StatValue(Stat.Strength, stats.strength));
  }

  return result;
}