import { Box, Tooltip, useTheme } from '@material-ui/core';
import React from 'react';
import Item from '../../server-first/Item';
import { ItemQualityToColorString } from '../../styles/theme';

type InlineItemProps = {
  item: Item;
}

export default function InlineItem(props: InlineItemProps) {
  const theme = useTheme();

  const { item } = props;
  const itemStatsTooltip = item.stats.map(statValue => (
    <Box key={statValue.stat.longName}>{statValue.stat.longName} {statValue.value}</Box>
  ));

  const qualityColor = ItemQualityToColorString(item.quality, theme);

  return (
    <Tooltip title={
      <React.Fragment>
        <Box color={qualityColor}>{item.name}</Box>
        {itemStatsTooltip}
      </React.Fragment>}>
      <Box color={qualityColor} component="div" display="inline" boxShadow={1} p={0.4} px={0.6} m={0.3} bgcolor="background.paper">
        {item.shortName}
        </Box>
    </Tooltip>
  )
}