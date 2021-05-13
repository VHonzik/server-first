import { Badge, createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import Player from "../../server-first/Player";
import { CharacterClassToColor } from '../../styles/theme';

type PlayerBadgeProps = {
  player: Player,
  showStatus?: boolean;
};

type PlayerBadgeCssProps = {
  color: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: (props: PlayerBadgeCssProps) => props.color,
      color: (props: PlayerBadgeCssProps) => theme.palette.getContrastText(props.color),
    },
    badge: {
      backgroundColor: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: '""',
      },
    },
  })
);

export default function PlayerBadge(props: PlayerBadgeProps) {
  const { player } = props;

  const theme = useTheme();
  const characterClassColor = CharacterClassToColor(player.characterClass, theme);

  const classes = useStyles({color: characterClassColor});

  const avatar = <Avatar className={classes.avatar}>{player.shortName}</Avatar>;
  let badge = (
    <Badge classes={{badge: classes.badge}} overlap='circle' variant='dot' anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} >
      <Avatar className={classes.avatar}>{player.shortName}</Avatar>
    </Badge>
  );

  if (props.showStatus !== undefined && props.showStatus === false) {
    badge = avatar;
  }

  return badge;
}