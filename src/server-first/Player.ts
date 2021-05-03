import assert from "assert";

import CharacterClass from './CharacterClass';
import Inventory from './Inventory';
import Item from './Item';
import { ShabbyPants } from './Items';
import SlotType from './SlotType';

export default class Player {
  public staminaMax: number;
  public staminaCurrent: number;
  public inventory: Inventory = new Inventory();

  constructor(public name: string, public characterClass: CharacterClass, stamina:number) {
    this.staminaMax = stamina;
    this.staminaCurrent = this.staminaMax;
    this.addItem(SlotType.Legs, ShabbyPants);
  }

  addItem(slot: SlotType, item: Item) {
    assert(this.characterClass.allowedItemTypes.includes(item.type));
    this.inventory.addItemToSlot(slot, item);
  }
}
