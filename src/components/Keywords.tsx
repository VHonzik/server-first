import CharacterClass from "../server-first/CharacterClass";
import InlineKeyword from "./InlineKeyword";

import assert from "assert";
import CharacterRole from "../server-first/CharacterRole";

export function MageKeyword() {
  return <InlineKeyword tooltipText='Mage is a ranged DPS class' encyclopediaUrl='/encyclopedia/classes/mage' keyword='Mage' />
}

export function RogueKeyword() {
  return <InlineKeyword tooltipText='Rogue is a melee DPS class' encyclopediaUrl='/encyclopedia/classes/rogue' keyword='Rogue' />
}

export function PriestKeyword() {
  return <InlineKeyword tooltipText='Priest is a Healer class' encyclopediaUrl='/encyclopedia/classes/priest' keyword='Priest' />
}

export function WarriorKeyword() {
  return <InlineKeyword tooltipText='Warrior is a Tank class' encyclopediaUrl='/encyclopedia/classes/warrior' keyword='Warrior' />
}

export function ClassToKeyword(characterClass: CharacterClass) : JSX.Element {
  if (characterClass === CharacterClass.Mage) {
    return MageKeyword();
  } else if (characterClass === CharacterClass.Priest) {
    return PriestKeyword();
  } else if (characterClass === CharacterClass.Rogue) {
    return RogueKeyword();
  } else {
    assert(characterClass === CharacterClass.Warrior);
    return WarriorKeyword();
  }
}

export function RoleKeyword(props: { plural?: boolean }) {
  const text = props.plural !== undefined && props.plural ? 'Roles' : 'Role';
  return <InlineKeyword tooltipText="Role is a character's job in dungeons and raids" encyclopediaUrl='/encyclopedia/roles' keyword={text} />
}

export function DPSKeyword() {
  return <InlineKeyword tooltipText='DPS is a character role specializing in dealing damage to enemies' encyclopediaUrl='/encyclopedia/roles/dps' keyword='DPS' />
}

export function HealerKeyword() {
  return <InlineKeyword tooltipText='Healer is a character role specializing in healing other group members' encyclopediaUrl='/encyclopedia/roles/healer' keyword='Healer' />
}

export function TankKeyword() {
  return <InlineKeyword tooltipText='Tank is a character role specializing in taking and withstanding the damage from enemies' encyclopediaUrl='/encyclopedia/roles/tank' keyword='Tank' />
}

export function RoleToKeyword(characterRole: CharacterRole) : JSX.Element {
  if (characterRole === CharacterRole.DPS) {
    return DPSKeyword();
  } else if (characterRole === CharacterRole.Healer) {
    return HealerKeyword();
  } else {
    assert(characterRole === CharacterRole.Tank);
    return TankKeyword();
  }
}