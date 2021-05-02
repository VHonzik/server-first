import { useState } from 'react';
import Guild from '../server-first/Guild';
import MembersTableElement from './MembersTableElement';

function guildMembersToTableElement() {
  return Guild.members.map(member => (
    <MembersTableElement key={member.name} player={member} />
  ));
}

function MembersTable() {
  const [members, setMembers] = useState(guildMembersToTableElement());

  Guild.onMembersChanged.subscribe(() => {
    setMembers(guildMembersToTableElement());
  });

  return (
    <div>
      <h1>Guild Members</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Class</th>
            <th>Stamina</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
        {members}
        </tbody>
      </table>
    </div>
  );
}

export default MembersTable;