import CharacterRole from "./CharacterRole";
import { DPSPerformanceMetricsObject, PerformanceMetricsObject } from "./ClassPerformanceMetric";
import ItemType, { AllPhysicalWeapons, ClothWearer, LeatherWearer, PlateWearer, MagicUserWeapons, OneHandedWeapons, RangedPhysicalWeapons } from "./ItemType";
import Stat from "./Stat";

export type StatPriority = {
  stat: Stat;
  priority: number;
  upToValue?: number;
}

const mageStatPriority: StatPriority[] = [{ stat: Stat.Intellect, priority: 0 }, { stat: Stat.HitRating, priority: 2, upToValue: 16.0 }, { stat: Stat.Spirit, priority: 4 }, { stat: Stat.CriticalRating, priority: 4 },  { stat: Stat.Haste, priority: 5 }, { stat: Stat.Resistance, priority: 7 },  { stat: Stat.Armor, priority: 7 }, { stat: Stat.Stamina, priority: 7 }];

const magePerformanceMetrics: DPSPerformanceMetricsObject = {
  aoeBurst:+2,
  aoeDamageOutput:+3,
  cleaveDamageOutput:-1,
  itemLevelScaling:-1,
  mobility: +2,
  singleTargetBurst: +1,
  singleTargetDamageOutput: +1,
  survivability: +3,
  sustainedDamageProfile: -3,
  threatManagement: +1,
  utility:+1
};

const priestStatPriority: StatPriority[] = [{ stat: Stat.Intellect, priority: 0 }, { stat: Stat.Spirit, priority: 2 }, { stat: Stat.Haste, priority: 4 }, { stat: Stat.CriticalRating, priority: 5 }, { stat: Stat.Resistance, priority: 7 },  { stat: Stat.Armor, priority: 7 }, { stat: Stat.Stamina, priority: 7 }];

const rogueStatPriority: StatPriority[] = [{ stat: Stat.Agility, priority: 0 }, { stat: Stat.HitRating, priority: 2, upToValue: 9.0 }, { stat: Stat.CriticalRating, priority: 4 }, { stat: Stat.Strength, priority: 4 }, { stat: Stat.Haste, priority: 5 }, { stat: Stat.Resistance, priority: 7 },  { stat: Stat.Armor, priority: 7 }, { stat: Stat.Stamina, priority: 7 }];

const roguePerformanceMetrics: DPSPerformanceMetricsObject = {
  aoeBurst:-1,
  aoeDamageOutput:-2,
  cleaveDamageOutput:+2,
  itemLevelScaling:+1,
  mobility: +1,
  singleTargetBurst: -2,
  singleTargetDamageOutput: +3,
  survivability: +2,
  sustainedDamageProfile: +3,
  threatManagement: +1,
  utility:-3
};

const warriorStatPriority: StatPriority[] = [{ stat: Stat.Stamina, priority: 0 }, { stat: Stat.HitRating, priority: 1, upToValue: 8.0 }, { stat: Stat.Resistance, priority: 2 }, { stat: Stat.Agility, priority: 2 }, { stat: Stat.Armor, priority: 3 }, { stat: Stat.CriticalRating, priority: 4 }, { stat: Stat.Haste, priority: 6 } ];



export default class CharacterClass {
  public static Mage = new CharacterClass('Mage', CharacterRole.DPS, [...ClothWearer, ...MagicUserWeapons, ItemType.OneHandedSword], mageStatPriority, magePerformanceMetrics);
  public static Priest = new CharacterClass('Priest', CharacterRole.Healer, [...ClothWearer, ...MagicUserWeapons, ItemType.OneHandedMace], priestStatPriority, {});
  public static Rogue = new CharacterClass('Rogue', CharacterRole.DPS, [...LeatherWearer, ...OneHandedWeapons, ...RangedPhysicalWeapons], rogueStatPriority, roguePerformanceMetrics);
  public static Warrior = new CharacterClass('Warrior', CharacterRole.Tank, [...PlateWearer, ...AllPhysicalWeapons], warriorStatPriority, {});

  private constructor(public longName: string, public role: CharacterRole, public allowedItemTypes: ItemType[], public statPriorities: StatPriority[], public performance:PerformanceMetricsObject) {
  }
}