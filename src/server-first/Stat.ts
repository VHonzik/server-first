export default class Stat {
  public static Agility = new Stat('Agility','agi');
  public static Intellect = new Stat('Intellect','int');
  public static Stamina = new Stat('Stamina','stam');
  public static Strength = new Stat('Strength','str');

  public static Armor = new Stat('Armor','arm');
  public static CriticalRating = new Stat('Critical Rating','crit');
  public static DefenseRating = new Stat('Defense Rating','def');
  public static Haste = new Stat('Haste','hst');
  public static HitRating = new Stat('Hit Rating','hit');
  public static Resistance = new Stat('Resistance','res');
  public static Spirit = new Stat('Spirit','spr');

  constructor(public longName: string, public shortName:string) {
  }
}