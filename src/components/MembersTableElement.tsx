import Player from '../server-first/Player';
import CharacterRoleDisplay from './CharacterRoleDisplay';
import InlineInventory from './InlineInventory';

type MembersTableProps = {
  player: Player
};

function MembersTableElement(props: MembersTableProps) {
  return (
    <tr>
      <td>{props.player.name}</td>
      <td><CharacterRoleDisplay role={props.player.characterClass.role} /></td>
      <td>{props.player.characterClass.longName}</td>
      <td>{props.player.staminaCurrent}/{props.player.staminaMax}</td>
      <td><InlineInventory inventory={props.player.inventory} /></td>
    </tr>
  );
}

export default MembersTableElement;