import { assertItemFitsItemSlot } from "./Assertions";
import Item from "./Item";
import SlotType from "./SlotType";

export default class ItemSlot {
  public item:Item | null = null;

  constructor(readonly slot: SlotType) {
  }

  addItem(item: Item) {
    assertItemFitsItemSlot(item, this);
    this.item = item;
  }
}
