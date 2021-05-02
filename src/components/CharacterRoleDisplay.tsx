import CharacterRole from '../server-first/CharacterRole';

type CharacterRoleDisplayProps = {
  role: CharacterRole
}

function CharacterRoleDisplay(props: CharacterRoleDisplayProps) {
  return (
    <a href={`/encyclopedia/${props.role.encyclopediaRelativePath}`}>{props.role.longName}</a>
  );
}

export default CharacterRoleDisplay;