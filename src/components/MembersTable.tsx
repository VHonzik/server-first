import { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import Guild from '../server-first/Guild';
import MembersTableElement from './MembersTableElement';
import { Container } from '@material-ui/core';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'role', headerName: 'Role', width: 110 },
  { field: 'class', headerName: 'Class', width: 120 },
  { field: 'stamina', headerName: 'Stamina', width: 130 },
  { field: 'itemLevel', headerName: 'Item Level', width: 150 },
  { field: 'items', headerName: 'Items', width: 250 },
];

const rows = [
  { id:0, name: 'Fachatka', role: 'DPS' },
  { id:1, name: 'Kremilek', role: 'Tank' },
];

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
      <Container style={{height: 600}}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </Container>

    </div>
  );
}

export default MembersTable;