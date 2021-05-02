export default class ItemQuality {

  public static Poor = new ItemQuality('#777777');
  public static Common = new ItemQuality('#000000');
  public static Uncommon = new ItemQuality('#1eff00');
  public static Rare = new ItemQuality('#0070dd');
  public static Epic = new ItemQuality('#9345ff');
  public static Legendary = new ItemQuality('#ff8000');

  private constructor(public color:string) {
  }
}