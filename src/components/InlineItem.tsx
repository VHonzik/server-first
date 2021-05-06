import { Box, Tooltip } from '@material-ui/core';
import React from 'react';

import Item from "../server-first/Item";

type InlineItemProps = {
  item: Item;
}

export default function InlineItem(props: InlineItemProps) {
  const {item} = props;
  const itemStatsTooltip = item.stats.map(statValue => (
    <Box>{statValue.stat.longName} {statValue.value}</Box>
  ));

  return (
    <Tooltip title={
      <React.Fragment>
        <Box color={item.quality.color}>{item.name}</Box>
        {itemStatsTooltip}
      </React.Fragment>}>
      <Box color={item.quality.color} component="div" display="inline" boxShadow={1} p={0.4} px={0.6} m={0.3} bgcolor="background.paper">
        {item.shortName}
        </Box>
    </Tooltip>
  );
}