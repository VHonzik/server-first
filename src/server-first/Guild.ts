import { ISignal, SignalDispatcher } from "strongly-typed-events";
import CharacterClass from "./CharacterClass";
import { HiddenAlcovesOfKirene } from "./content/Dungeons";
import Dungeon from "./Dungeon";
import DungeonRun from "./DungeonRun";
import GameTime from "./GameTime";
import Player from "./Player";

class Guild {
  private onMembersChangedSignal = new SignalDispatcher();
  private onDungeonRunsChangedSignal = new SignalDispatcher();
  public ongoingRuns: Array<DungeonRun> = [];
  public finishedRuns: Array<DungeonRun> = [];
  public members: Array<Player>;

  public constructor() {
    this.members = [
      new Player('Alliances', CharacterClass.Priest, 3),
      new Player('Czekr', CharacterClass.Warrior, 3),
      new Player('Fachatka', CharacterClass.Mage, 3),
      new Player('Zrzek', CharacterClass.Rogue, 3),
      new Player('Utatis', CharacterClass.Rogue, 3),
    ];

    this.startDungeonRun(HiddenAlcovesOfKirene);
  }

  public addMember(member: Player) {
    this.members.push(member);
    this.onMembersChangedSignal.dispatch();
  }

  public get onMembersChanged():ISignal {
    return this.onMembersChangedSignal.asEvent();
  }

  public get onDungeonRunsChanged():ISignal {
    return this.onDungeonRunsChangedSignal.asEvent();
  }

  public startDungeonRun(dungeon: Dungeon) {
    const run = new DungeonRun(dungeon, this.members);
    this.ongoingRuns.push(run);
    GameTime.registerCallback(run.endTime, () => {
      this.dungeonRunFinished(run);
    });
    this.onDungeonRunsChangedSignal.dispatch();
  }

  private dungeonRunFinished(finishedRun: DungeonRun) {
    finishedRun.runFinished();
    this.ongoingRuns = this.ongoingRuns.filter(dungeonRun => dungeonRun !== finishedRun);
    this.finishedRuns.push(finishedRun);
    this.onDungeonRunsChangedSignal.dispatch();
  }
}

export default new Guild();