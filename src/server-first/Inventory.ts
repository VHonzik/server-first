import Item from "./Item";
import ItemBinding from "./ItemBinding";
import ItemSlot from "./ItemSlot";
import SlotType from "./SlotType";

export default class Inventory {
  public slots: ItemSlot[] = [];
  public bags: Item[] = [];

  constructor() {
    for (const slotType of SlotType.all) {
      this.slots.push(new ItemSlot(slotType));
    }
  }

  addItemToSlot(slot:SlotType, item: Item) {
    const itemSlot = this.slots.find(itemSlot => itemSlot.slot === slot);
    if (itemSlot !== undefined) {
      if (itemSlot.item !== null) {
        this.bags.push(itemSlot.item);
      }

      if (item.binding === ItemBinding.BindOnEquip || item.binding === ItemBinding.BindOnPickup) {
        item.binding = ItemBinding.Soulbound;
      }

      itemSlot.addItem(item);
    }
  }

  addItemToBag(item: Item) {
    if (item.binding === ItemBinding.BindOnPickup) {
      item.binding = ItemBinding.Soulbound;
    }
    this.bags.push(item);
  }
};