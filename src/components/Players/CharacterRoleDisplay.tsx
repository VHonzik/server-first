import { Link } from 'react-router-dom';
import CharacterRole from '../../server-first/CharacterRole';

type CharacterRoleDisplayProps = {
  role: CharacterRole
}

function CharacterRoleDisplay(props: CharacterRoleDisplayProps) {
  return (
    <Link to={`/encyclopedia/${props.role.encyclopediaRelativePath}`}>{props.role.longName}</Link>
  );
}

export default CharacterRoleDisplay;