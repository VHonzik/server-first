export default class CharacterRole {
  public static DPS = new CharacterRole('DPS', 'roles/dps');
  public static Healer = new CharacterRole('Healer', 'roles/healer');
  public static Tank = new CharacterRole('Tank', 'roles/tank');

  private constructor(public longName: string, public encyclopediaRelativePath: string) {
  }
}