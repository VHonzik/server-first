import CharacterRole from "./CharacterRole";
import ItemType, { AllPhysicalWeapons, ClothWearer, LeatherWearer, PlateWearer, MagicUserWeapons, OneHandedWeapons, RangedPhysicalWeapons } from "./ItemType";

export default class CharacterClass {
  public static Mage = new CharacterClass('Mage', CharacterRole.DPS, [...ClothWearer, ...MagicUserWeapons, ItemType.OneHandedSword]);
  public static Priest = new CharacterClass('Priest', CharacterRole.Healer, [...ClothWearer, ...MagicUserWeapons, ItemType.OneHandedMace]);
  public static Rogue = new CharacterClass('Rogue', CharacterRole.DPS, [...LeatherWearer, ...OneHandedWeapons, ...RangedPhysicalWeapons]);
  public static Warrior = new CharacterClass('Warrior', CharacterRole.Tank, [...PlateWearer, ...AllPhysicalWeapons]);

  private constructor(public longName: string, public role: CharacterRole, public allowedItemTypes: ItemType[]) {
  }
}