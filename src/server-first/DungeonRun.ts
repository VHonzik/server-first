import Dungeon from "./Dungeon";
import GameTime from "./GameTime";
import { clamp } from "./Utils";

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

  public getProgress() : number {
    if (this.finished) {
      return 1.0;
    }

    const start = this.startTime.getTime();
    const end = this.endTime.getTime();

    const clampedTime = clamp(GameTime.time.getTime(), start, end);
    return (clampedTime - start) / (end - start);
  }
}