import Dungeon from "./Dungeon";
import GameTime from "./GameTime";

export default class DungeonRun {
  public startTime: Date;
  public endTime: Date;
  public finished: boolean = false;

  public constructor(public dungeon: Dungeon) {
    this.startTime = new Date(GameTime.time);
    const duration = Math.round(20.0 + Math.random() * 20.0) * 60;
    this.endTime = new Date(this.startTime);
    this.endTime.setSeconds(this.endTime.getSeconds() + duration);
  }

  public runFinished() {
    this.finished = true;
  }
}