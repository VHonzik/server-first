export default class ItemQuality {

  public static Poor = new ItemQuality('poorItemQuality');
  public static Common = new ItemQuality('commonItemQuality');
  public static Uncommon = new ItemQuality('uncommonItemQuality');
  public static Rare = new ItemQuality('rareItemQuality');
  public static Epic = new ItemQuality('epicItemQuality');
  public static Legendary = new ItemQuality('legendaryItemQuality');

  private constructor(public paletteColor:string) {
  }
}