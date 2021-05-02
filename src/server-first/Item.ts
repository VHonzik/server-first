import ItemType from "./ItemType";
import ItemQuality from "./ItemQuality";
import SlotType from "./SlotType";

export enum SlotOccupation {
  OneOf = 0,
  All
}

export default class Item {
  public shortName:string;
  constructor(readonly name: string, public possibleSlots: SlotType[], public slotOccupation: SlotOccupation, public quality: ItemQuality, public type: ItemType) {
    const re : RegExp = /\b(\w)/g;
    this.shortName = Array.from(name.matchAll(re)).map(match => {
      return match[1];
    }).join('');
  }
}