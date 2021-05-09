import Avatar from '@material-ui/core/Avatar';

import Player from "../server-first/Player";

type PlayerBadgeProps = {
  player: Player
};

export default function PlayerBadge(props: PlayerBadgeProps) {
  const { player } = props;
  return (
    <Avatar>{player.shortName}</Avatar>
  )
}