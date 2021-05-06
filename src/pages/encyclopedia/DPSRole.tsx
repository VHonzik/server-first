import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { MageKeyword, RogueKeyword } from '../../components/Keywords';

export default function DPSRole() {
  return (
    <Box component='div' >
      <Typography variant="h2" gutterBottom>DPS</Typography>
      <Typography paragraph>
        Characters with DPS role, also called damage dealers, specialize in dishing out as much damage as possible. They will be the most numerous role in your dungeons and raid rosters. You will often want to bring as many damage dealers as you can afford.
      </Typography>
      <Typography paragraph>
        Damage dealers can be further divided into two major subgroups: melee and ranged damage dealers. Some encounters will favor one or the other of these subgroups. Melee damage dealers are generally able to do more overall sustained single-target damage and are able to keep dealing damage if their target is moving with the tank. However, their damage output often drops significantly if they cannot be close to their target. Ranged damage dealers often have better damage output in AOE and burst situations. Because they do not have to be next to their target they have an advantage when switching between spread-out targets. Ranged damaged dealers usually suffer in movement heavy encounter and can struggle with sustaining their damage output over long encounters.
      </Typography>
      <Typography paragraph>
        There are two classes that belong to the DPS role: <MageKeyword /> and <RogueKeyword />. Different DPS classes will have different strengths and weakness. Therefore no roster will be optimal for all encounters you will face in the game. This game measures damaged dealers performance in different scenarios using following 11 performance metrics. The score in them can range from --- (very bad) to +++ (amazing).
      </Typography>
      <dl>
        <dt>
          <h4>AOE burst</h4>
        </dt>
        <dd>Measures how well the damage dealer is able to do dish out a lot of damage to many enemies in a very short time window. Some encounters require to quickly kill a lot of weak enemies which is where DPS characters with high score in this characteristics thrive.</dd>
        <dt>
          <h4>AOE damage output</h4>
        </dt>
        <dd>Measures how well the damage dealer performs when a lot of enemies needs to be killed during the encounter. It is often come for encounters to feature a phase where the boss cannot be damaged and a lot of weak enemies will spawn. Damaged dealers with good <i>AOE damage output</i> score are experts at handling these phases.</dd>
        <dt>
          <h4>Cleave damage output</h4>
        </dt>
        <dd>Measures how well the damage dealer's damage output scales to a limited amount of clustered targets. While not quite an AOE situation, some encounters will have a few stronger enemies along for the ride. Characters with high score in <i>Cleave damage output</i> boost their damaged output significantly as portion of their single target damage is also done to the nearby targets.</dd>
        <dt>
          <h4>Item level scaling</h4>
        </dt>
        <dd>Measures how well the DPS character scales with item level. While all damaged dealers benefit from increasing item level, some simply scale better. Characters with high score in <i>Item level scaling</i> tend to be weaker earlier in an expansion but dominate the end game.</dd>
        <dt>
          <h4>Mobility</h4>
        </dt>
        <dd>Measures how well can the character compensate for movement dictated by the encounter. Characters with high score in mobility are able to increase their up-time on their targets and therefore increase their damage output.</dd>
        <dt>
          <h4>Single target burst</h4>
        </dt>
        <dd>Measures how well the damage dealer is able to do dish out a lot of damage to a single enemy in a very short time window. Some encounters require to quickly kill one strong enemy which is where DPS characters with high score in this characteristics thrive.</dd>
        <dt>
          <h4>Single target damage output</h4>
        </dt>
        <dd>Measures how well the damage dealer performs against a single target. Bread and butter of DPS roles, especially in raids.</dd>
        <dt>
          <h4>Survivability</h4>
        </dt>
        <dd>Measures how well the damaged dealer handles incoming damage. While it is Tank role job to soak up most of the damage, in some encounter it is unavoidable that the DPS characters will also share the pain. Characters with high score in <i>Survivability</i> will outlast most other DPS characters and can help secure clutch kills.</dd>
        <dt>
          <h4>Sustained damage profile</h4>
        </dt>
        <dd>Measures how long can the character sustain their damaged output. Often very polarizing characteristic as some character use infinite steady resource for their damage output while others have very finite source that however can often be spent quicker.</dd>
        <dt>
          <h4>Threat management</h4>
        </dt>
        <dd>Measures how little threat the character generates and their ability to reduce it. It is tightly coupled with Tank role's ability to generate threat. The less threat damage dealer outputs the quicker it can start dealing damage to a new target.</dd>
        <dt>
          <h4>Utility</h4>
        </dt>
        <dd>
          Measures how much utility the character brings to their fellow players. Not every class can top the damage meters but a DPS with high utility score can boost other characters so much so they are worth much more albeit in limited number. Note that the benefits from one class <i>Utility</i> often do not stack with each other so carefully consider the amount you want to bring.
        </dd>
      </dl>
  </Box>
  );
}