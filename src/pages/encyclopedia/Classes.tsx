import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@material-ui/core";

import PerformanceMetricsTable from "../../components/PerformanceMetricsTable";
import CharacterClass from "../../server-first/CharacterClass";
import InlineStatPriorityDisplay from "../../components/InlineStatPriorityDisplay";

export default function Classes() {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>Classes</Typography>
      <Typography paragraph>Character class is a crucial attribute of a character. Not only it determines which <Link component={RouterLink} to='/encyclopedia/roles'>Role</Link> it will perform in the game but also it's strength and weakness.</Typography>
      <Typography paragraph>There are four classes in the game: Mage, Priest, Rogue, Warrior. Following section categorize them by their role and list their performance metric scores. For more information about the performance metrics, see the <Link component={RouterLink} to='/encyclopedia/roles'>Roles</Link> section.</Typography>

      <Typography variant="h2" gutterBottom>DPS</Typography>

      <Typography variant="h3" gutterBottom>Mage</Typography>
      <Typography paragraph>Thanks to repertoire of powerful spells mages are ranged DPS class that can hold off hordes on enemies.</Typography>

      <Typography variant="h4" gutterBottom>Stat priority</Typography>
      <InlineStatPriorityDisplay priorities={CharacterClass.Mage.statPriorities} />

      <Typography variant="h4" gutterBottom>Performance</Typography>

      <PerformanceMetricsTable scores={CharacterClass.Mage.performance} />

      <Typography variant="h3" gutterBottom>Rogue</Typography>
        <Typography paragraph>Masters of unfair plays and dirty tricks, Rogues are melee class that excels at sustained single target damage.</Typography>

      <Typography variant="h4" gutterBottom>Stat priority</Typography>
      <InlineStatPriorityDisplay priorities={CharacterClass.Rogue.statPriorities} />

      <Typography variant="h4" gutterBottom>Performance</Typography>
      <PerformanceMetricsTable scores={CharacterClass.Rogue.performance} />
    </div>
  )
}