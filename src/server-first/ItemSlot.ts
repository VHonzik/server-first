import assert from "assert";
import Item from "./Item";
import SlotType from "./SlotType";

export default class ItemSlot {
  public item:Item | null = null;

  constructor(readonly slot: SlotType) {
  }

  addItem(item: Item) {
    assert(item.possibleSlots.includes(this.slot));
    this.item = item;
  }

  removeItem() {
    assert(this.item !== null, 'Tried to remove item from empty slot.');
    this.item = null;
  }
}
