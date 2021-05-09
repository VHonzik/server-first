import assert from "assert";

import CharacterClass from './CharacterClass';
import Inventory from './Inventory';
import Item from './Item';
import { ShabbyPants, VestOfLesserCrit } from './Items';
import SlotType from './SlotType';

export default class Player {
  public staminaMax: number;
  public staminaCurrent: number;
  public inventory: Inventory = new Inventory();
  public itemLevel: number = 5;
  public shortName: string;

  constructor(public name: string, public characterClass: CharacterClass, stamina:number) {
    this.staminaMax = stamina;
    this.staminaCurrent = this.staminaMax;
    this.shortName = name.substr(0, 2).toUpperCase();

    this.addItem(SlotType.Legs, ShabbyPants);
    this.addItem(SlotType.Chest, VestOfLesserCrit);
  }

  addItem(slot: SlotType, item: Item) {
    assert(this.characterClass.allowedItemTypes.includes(item.type));
    this.inventory.addItemToSlot(slot, item);
  }
}
