import Item, { SlotOccupation } from './Item'
import ItemType from './ItemType';
import ItemQuality from './ItemQuality';
import SlotType from './SlotType'
import { createStats } from './StatValue';


// Names
// Legs: Leggings, Breeches, Loincloth, Pants, Legguards, Woollies, Trousers
// Leather chest: Vest, Tunic, Harness, Hide


// Starting gear
export const ShabbyPants = new Item('Shabby Pants', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Cloth, createStats({armor: 5, haste: -2}));
export const ShabbyLeggings = new Item('Shabby Leggings', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Leather, createStats({armor: 11, hitRating: -2}));
export const ShabbyLegguards = new Item('Shabby Legguards', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Plate, createStats({armor: 15, defenseRating: -2}));

// Sample gear
export const LeggingsOfLesserHaste = new Item('Leggings of Lesser Haste', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Common, ItemType.Leather, createStats({armor: 13, haste: 1}));
