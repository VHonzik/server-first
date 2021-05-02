import Inventory from "../server-first/Inventory";
import InlineItem from "./InlineItem";

type InlineInventoryProps = {
  inventory: Inventory
}

function InlineInventory(props: InlineInventoryProps) {
  const slotsSpans = props.inventory.slots.map(itemSlot => itemSlot.item !== null ? (<InlineItem key={itemSlot.slot.name} item={itemSlot.item} />) : (<span key={itemSlot.slot.name}>O</span>));
  return (
    <span>
      {slotsSpans}
    </span>
  );
}

export default InlineInventory;