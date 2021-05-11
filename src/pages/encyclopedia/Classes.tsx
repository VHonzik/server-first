import {  Typography } from "@material-ui/core";

import PerformanceMetricsTable from "../../components/Players/PerformanceMetricsTable";
import { MageKeyword, PriestKeyword, RogueKeyword, WarriorKeyword, RoleKeyword, DPSKeyword } from "../../components/Keywords";
import CharacterClass from "../../server-first/CharacterClass";
import InlineStatPriorityDisplay from "../../components/Players/InlineStatPriorityDisplay";

export default function Classes() {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>Classes</Typography>
      <Typography paragraph>Character class is a crucial attribute of a character. Not only it determines which <RoleKeyword /> it will perform in the game but also it's strength and weakness.</Typography>
      <Typography paragraph>There are four classes in the game: <MageKeyword />, <PriestKeyword />, <RogueKeyword />, <WarriorKeyword />. Following section categorize them by their role and list their performance metric scores. For more information about the performance metrics, see the <RoleKeyword plural /> section.</Typography>

      <Typography variant="h2" gutterBottom>DPS</Typography>

      <Typography variant="h3" gutterBottom>Mage</Typography>
      <Typography paragraph>Thanks to repertoire of powerful spells mages are ranged <DPSKeyword /> class that can hold off hordes on enemies.</Typography>

      <Typography variant="h4" gutterBottom>Stat priority</Typography>
      <InlineStatPriorityDisplay priorities={CharacterClass.Mage.statPriorities} />

      <Typography variant="h4" gutterBottom>Performance</Typography>

      <PerformanceMetricsTable scores={CharacterClass.Mage.performance} />

      <Typography variant="h3" gutterBottom>Rogue</Typography>
        <Typography paragraph>Masters of unfair plays and dirty tricks, Rogues are melee <DPSKeyword /> class that excels at sustained single target damage.</Typography>

      <Typography variant="h4" gutterBottom>Stat priority</Typography>
      <InlineStatPriorityDisplay priorities={CharacterClass.Rogue.statPriorities} />

      <Typography variant="h4" gutterBottom>Performance</Typography>
      <PerformanceMetricsTable scores={CharacterClass.Rogue.performance} />
    </div>
  )
}