// export enum SlotType {
//   Head = 0,
//   Amulet,
//   Chest,
//   Legs,
//   Boots,

//   MainHand,
//   OffHand,

//   Gloves,
//   RingOne,
//   RingTwo,
//   TrinketOne,
//   TrinketTwo,
// }

export default class SlotType {
  public static Head = new SlotType('head');
  public static Amulet = new SlotType('amulet');
  public static Chest = new SlotType('chest');
  public static Legs = new SlotType('legs');
  public static Boots = new SlotType('boots');

  public static MainHand = new SlotType('mainhand');
  public static OffHand = new SlotType('offhand');

  public static Gloves = new SlotType('gloves');
  public static RingOne = new SlotType('ringone');
  public static RingTwo = new SlotType('ringtwo');
  public static TrinketOne = new SlotType('trinketone');
  public static TrinketTwo = new SlotType('trinkettwo');

  public static all: SlotType[] = [SlotType.Head, SlotType.Amulet, SlotType.Chest, SlotType.Legs, SlotType.Boots, SlotType.MainHand, SlotType.OffHand, SlotType.Gloves, SlotType.RingOne, SlotType.RingTwo, SlotType.TrinketOne, SlotType.TrinketTwo,];

  private constructor(readonly name: string) {
  }
}