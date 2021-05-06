import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { DPSKeyword, HealerKeyword, WarriorKeyword } from '../../components/Keywords';

export default function TankRole() {
  return (
    <Box component='div' >
      <Typography variant="h2" gutterBottom>Tank</Typography>
      <Typography paragraph>
        Characters with Tank role specialize in holding the enemies attention while surviving the incoming onslaught with the help of <HealerKeyword /> characters. Having tank allows characters with <DPSKeyword /> role to focus only on damage dealing and tanks are therefore crucial part of any group. Depending on the encounter it usually only necessary to bring one or two tanks but exactly for that reason they must usually be prepared more so than other group members.
      </Typography>
      <Typography paragraph>
        Tanks can rarely avoid taking any damage from enemies but they can significantly reduce the amount. There are two broad categories of reducing the incoming damage: avoidance and mitigation. Avoidance refers to, usually, random chance to completely avoid a single enemy attack. Mitigation refers to flat or percentage reduction of the received damage from a single enemy attack. Tanks with high avoidance tend to take less damage overall but their incoming damage profile can be "spiky" and in extreme scenarios very hard to heal through. Tanks with high mitigation tend to have much more predictable incoming damage profile albeit usually take more damage in the long run and therefore deplete more healers mana. Different encounters and raid rosters can favor one or the other category.
      </Typography>
      <Typography paragraph>
        There is one class that belong to the Tank role: <WarriorKeyword />. Different tank classes will have different strengths and weakness. Therefore no roster will be optimal for all encounters you will face in the game. This game measures tanks performance in different scenarios using following X performance metrics. The score in them can range from --- (very bad) to +++ (amazing).
      </Typography>
  </Box>
  );
}