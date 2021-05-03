import CharacterRole from "./CharacterRole";
import ItemType, { AllPhysicalWeapons, ClothWearer, LeatherWearer, PlateWearer, MagicUserWeapons, OneHandedWeapons, RangedPhysicalWeapons } from "./ItemType";
import Stat from "./Stat";

type StatPriority = {
  stat: Stat;
  priority: number;
  upToValue?: number;
}

const mageStatPriority: StatPriority[] = [{ stat: Stat.Intellect, priority: 0 }, { stat: Stat.HitRating, priority: 2, upToValue: 16.0 }, { stat: Stat.Spirit, priority: 4 }, { stat: Stat.CriticalRating, priority: 4 },  { stat: Stat.Haste, priority: 5 }, { stat: Stat.Resistance, priority: 7 },  { stat: Stat.Armor, priority: 7 }, { stat: Stat.Stamina, priority: 7 }];

const priestStatPriority: StatPriority[] = [{ stat: Stat.Intellect, priority: 0 }, { stat: Stat.Spirit, priority: 2 }, { stat: Stat.Haste, priority: 4 }, { stat: Stat.CriticalRating, priority: 5 }, { stat: Stat.Resistance, priority: 7 },  { stat: Stat.Armor, priority: 7 }, { stat: Stat.Stamina, priority: 7 }];

const rogueStatPriority: StatPriority[] = [{ stat: Stat.Agility, priority: 0 }, { stat: Stat.HitRating, priority: 2, upToValue: 9.0 }, { stat: Stat.CriticalRating, priority: 4 }, { stat: Stat.Strength, priority: 4 }, { stat: Stat.Haste, priority: 5 }, { stat: Stat.Resistance, priority: 7 },  { stat: Stat.Armor, priority: 7 }, { stat: Stat.Stamina, priority: 7 }];

const warriorStatPriority: StatPriority[] = [{ stat: Stat.Stamina, priority: 0 }, { stat: Stat.HitRating, priority: 1, upToValue: 8.0 }, { stat: Stat.Resistance, priority: 2 }, { stat: Stat.Agility, priority: 2 }, { stat: Stat.Armor, priority: 3 }, { stat: Stat.CriticalRating, priority: 4 }, { stat: Stat.Haste, priority: 6 } ];

export default class CharacterClass {
  public static Mage = new CharacterClass('Mage', CharacterRole.DPS, [...ClothWearer, ...MagicUserWeapons, ItemType.OneHandedSword], mageStatPriority);
  public static Priest = new CharacterClass('Priest', CharacterRole.Healer, [...ClothWearer, ...MagicUserWeapons, ItemType.OneHandedMace], priestStatPriority);
  public static Rogue = new CharacterClass('Rogue', CharacterRole.DPS, [...LeatherWearer, ...OneHandedWeapons, ...RangedPhysicalWeapons], rogueStatPriority);
  public static Warrior = new CharacterClass('Warrior', CharacterRole.Tank, [...PlateWearer, ...AllPhysicalWeapons], warriorStatPriority);

  private constructor(public longName: string, public role: CharacterRole, public allowedItemTypes: ItemType[], public statPriorities: StatPriority[]) {
  }
}