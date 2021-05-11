import Item, { SlotOccupation } from '../Item'
import ItemType from '../ItemType';
import ItemQuality from '../ItemQuality';
import SlotType from '../SlotType'
import { createStats } from '../StatValue';
import ItemBinding from '../ItemBinding';


// Names
// Legs: Leggings, Breeches, Loincloth, Pants, Legguards, Woollies, Trousers
// Chest: Vest, Tunic, Harness, Hide


// Starting gear
export const ShabbyPants = new Item('Shabby Pants', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Cloth, createStats({armor: 5, haste: -2}), ItemBinding.BindOnPickup);
export const ShabbyLeggings = new Item('Shabby Leggings', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Leather, createStats({armor: 11, hitRating: -2}), ItemBinding.BindOnPickup);
export const ShabbyLegguards = new Item('Shabby Legguards', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Poor, ItemType.Plate, createStats({armor: 15, defenseRating: -2}), ItemBinding.BindOnPickup);

// Sample gear
export const LeggingsOfLesserHaste = new Item('Leggings of Lesser Haste', [SlotType.Legs], SlotOccupation.OneOf, ItemQuality.Common, ItemType.Leather, createStats({armor: 13, haste: 1}), ItemBinding.BindOnPickup);

export const VestOfLesserCrit = new Item('Vest of Lesser Crit', [SlotType.Chest], SlotOccupation.OneOf, ItemQuality.Uncommon, ItemType.Cloth, createStats({armor: 13, criticalRating: 1}), ItemBinding.BindOnPickup);
