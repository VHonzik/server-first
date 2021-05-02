import Item, { SlotOccupation } from './Item'
import ItemType from './ItemType';
import ItemQuality from './ItemQuality';
import SlotType from './SlotType'


// Names
// Legs: Leggings, Breeches, Loincloth, Pants, Legguards, Woollies, Trousers
// Leather chest: Vest, Tunic, Harness, Hide


// Starting gear
// Leather
export const ShabbyPants = new Item('Shabby Pants', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Cloth);
export const ShabbyLeggings = new Item('Shabby Leggings', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Leather);



// Sample gear
export const LeggingsOfLesserHaste = new Item('Leggings of Lesser Haste', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Common, ItemType.Leather);
