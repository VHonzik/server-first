import { useState } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Container } from '@material-ui/core';

import InlineInventory from './InlineInventory';

import Guild from '../server-first/Guild';
import Player from '../server-first/Player';
import Inventory from '../server-first/Inventory';
import { ClassToKeyword, RoleToKeyword } from './Keywords';
import CharacterClass from '../server-first/CharacterClass';
import CharacterRole from '../server-first/CharacterRole';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'role', headerName: 'Role', width: 110, renderCell: (params: GridCellParams) => {
    return RoleToKeyword(params.value as CharacterRole);
  }},
  { field: 'class', headerName: 'Class', width: 120, renderCell: (params: GridCellParams) => {
    return ClassToKeyword(params.value as CharacterClass);
  }},
  { field: 'stamina', headerName: 'Stamina', width: 130 },
  { field: 'itemLevel', headerName: 'Item Level', width: 150 },
  { field: 'inventory', headerName: 'Items', width: 500, renderCell: (params: GridCellParams) => (
    <InlineInventory inventory={params.value as Inventory} />
  )},
];

function playerToRow(player: Player, index: number) {
  return {
    id: index, name: player.name, role: player.characterClass.role, class: player.characterClass, stamina: `${player.staminaCurrent}/${player.staminaMax}`, itemLevel: player.itemLevel, inventory: player.inventory
  };
}

function guildMembersRows() {
  return Guild.members.map((member, index) => playerToRow(member, index));
}

function MembersTable() {
  const [members, setMembers] = useState(guildMembersRows());

  Guild.onMembersChanged.subscribe(() => {
    setMembers(guildMembersRows());
  });

  return (
    <Container style={{height: 600}}>
      <DataGrid rows={members} columns={columns} pageSize={5} />
    </Container>
  );
}

export default MembersTable;