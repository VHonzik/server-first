export default class ItemType {
  public static Cloth = new ItemType();
  public static Leather = new ItemType();
  public static Mail = new ItemType();
  public static Plate = new ItemType();

  public static Jewelry = new ItemType();

  public static Dagger = new ItemType();
  public static FistWeapon = new ItemType();
  public static OneHandedAxe = new ItemType();
  public static OneHandedMace = new ItemType();
  public static OneHandedSword = new ItemType();

  public static Polearm = new ItemType();
  public static Staff = new ItemType();
  public static TwoHandedAxe = new ItemType();
  public static TwoHandedMace = new ItemType();
  public static TwoHandedSword = new ItemType();

  public static Bow = new ItemType();
  public static Crossbow = new ItemType();
  public static Gun = new ItemType();
  public static Wand = new ItemType();

  private constructor() {
  }
}

export const ClothWearer: ItemType[] = [ItemType.Cloth, ItemType.Jewelry];
export const LeatherWearer: ItemType[] = [...ClothWearer, ItemType.Leather];
export const MailWearer: ItemType[] = [...LeatherWearer, ItemType.Mail];
export const PlateWearer: ItemType[] = [...MailWearer, ItemType.Plate];
export const RangedPhysicalWeapons: ItemType[] = [ItemType.Bow, ItemType.Crossbow, ItemType.Gun];
export const OneHandedWeapons: ItemType[] = [ItemType.Dagger, ItemType.FistWeapon, ItemType.OneHandedAxe, ItemType.OneHandedMace, ItemType.OneHandedSword];
export const TwoHandedWeapons: ItemType[] = [ItemType.Polearm, ItemType.Staff, ItemType.TwoHandedAxe, ItemType.TwoHandedMace, ItemType.TwoHandedSword];
export const MagicUserWeapons: ItemType[] = [ItemType.Dagger, ItemType.Staff, ItemType.Wand];
export const AllPhysicalWeapons: ItemType[] = [...RangedPhysicalWeapons, ...OneHandedWeapons, ...TwoHandedWeapons];
