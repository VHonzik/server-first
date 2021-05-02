import Item from "./Item";
import ItemSlot from "./ItemSlot";
import SlotType from "./SlotType";

export default class Inventory {
  public slots:ItemSlot[] = [];

  constructor() {
    for (const slotType of SlotType.all) {
      this.slots.push(new ItemSlot(slotType));
    }
  }

  addItem(slot:SlotType, item: Item) {
    for (const itemSlot of this.slots) {
      if (itemSlot.slot === slot) {
        itemSlot.addItem(item);
      }
    }
  }
};