import { ISignal, SignalDispatcher } from "strongly-typed-events";
import CharacterClass from "./CharacterClass";
import Player from "./Player";

class Guild {
  private onMembersChangedSignal = new SignalDispatcher();
  public members: Array<Player>;

  constructor() {
    this.members = [
      new Player('Alliances', CharacterClass.Priest, 3),
      new Player('Czekr', CharacterClass.Warrior, 3),
      new Player('Fachatka', CharacterClass.Mage, 3),
    ];
  }

  public addMember(member: Player) {
    this.members.push(member);
    this.onMembersChangedSignal.dispatch();
  }

  public get onMembersChanged():ISignal {
    return this.onMembersChangedSignal.asEvent();
  }
}

export default new Guild();