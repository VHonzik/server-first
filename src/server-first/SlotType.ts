export default class SlotType {
  public static Head = new SlotType('head', 'Head');
  public static Amulet = new SlotType('amulet', 'Amulet');
  public static Chest = new SlotType('chest', 'Chest');
  public static Legs = new SlotType('legs', 'Legs');
  public static Boots = new SlotType('boots', 'Boots');

  public static MainHand = new SlotType('mainhand', 'Main Hand');
  public static OffHand = new SlotType('offhand', 'Offhand');

  public static Gloves = new SlotType('gloves', 'Gloves');
  public static RingOne = new SlotType('ringone', 'Ring One');
  public static RingTwo = new SlotType('ringtwo', 'Ring Two');
  public static TrinketOne = new SlotType('trinketone', 'Trinket One');
  public static TrinketTwo = new SlotType('trinkettwo', 'Trinket Two');

  public static all: SlotType[] = [SlotType.Head, SlotType.Amulet, SlotType.Chest, SlotType.Legs, SlotType.Boots, SlotType.MainHand, SlotType.OffHand, SlotType.Gloves, SlotType.RingOne, SlotType.RingTwo, SlotType.TrinketOne, SlotType.TrinketTwo,];

  private constructor(readonly name: string, readonly longName: string) {
  }
}