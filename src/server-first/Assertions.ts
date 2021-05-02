
import assert from "assert";
import CharacterClass from "./CharacterClass";
import Item from "./Item";
import ItemSlot from "./ItemSlot";

export function assertItemFitsItemSlot(item: Item, itemSlot: ItemSlot) {
  assert(item.possibleSlots.includes(itemSlot.slot));
}

export function assertCharacterClassCanEquipItem(character: CharacterClass, item: Item) {
  assert(character.allowedItemTypes.includes(item.type));
}