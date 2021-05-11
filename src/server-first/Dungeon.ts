import { shortName } from "./Utils";

export default class Dungeon {
  public shortName: string;

  constructor(public longName: string) {
    this.shortName = shortName(longName);
  }
}