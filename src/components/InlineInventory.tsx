import { Box, Tooltip } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

import InlineItem from "./InlineItem";

import Inventory from "../server-first/Inventory";


type InlineInventoryProps = {
  inventory: Inventory
}

const emptySlot = (
  <Tooltip title='Empty slot'>
    <Box component="div" color='#555' display="inline" boxShadow={1} p={0.4} m={0.3} bgcolor="background.paper">
      <ErrorIcon fontSize="small" style={{ verticalAlign: 'middle', paddingBottom: '3px'}} />
    </Box>
  </Tooltip>
)

function InlineInventory(props: InlineInventoryProps) {

  const slotsSpans = props.inventory.slots.map(itemSlot => {
    if (itemSlot.item !== null) {
      return (<InlineItem key={itemSlot.slot.name} item={itemSlot.item} />);
    } else {
      return emptySlot;
    }
  });

  return (
    <span>
      {slotsSpans}
    </span>
  );
}

export default InlineInventory;