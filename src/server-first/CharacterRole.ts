export default class CharacterRole {
  public static DPS = new CharacterRole('DPS', 'dps');
  public static Healer = new CharacterRole('Healer', 'healer');
  public static Tank = new CharacterRole('Tank', 'tank');

  private constructor(public longName: string, public encyclopediaRelativePath: string) {
  }
}