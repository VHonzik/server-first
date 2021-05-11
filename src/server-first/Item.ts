import ItemType from "./ItemType";
import ItemQuality from "./ItemQuality";
import SlotType from "./SlotType";
import StatValue from "./StatValue";
import ItemBinding from "./ItemBinding";
import { shortName } from "./Utils";

export enum SlotOccupation {
  OneOf = 0,
  All
}

export default class Item {
  public shortName:string;
  constructor(readonly name: string, public possibleSlots: SlotType[], public slotOccupation: SlotOccupation, public quality: ItemQuality, public type: ItemType, public stats: StatValue[], public binding: ItemBinding) {
    this.shortName = shortName(name);
  }
}