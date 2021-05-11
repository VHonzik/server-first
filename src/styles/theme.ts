import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import brown from '@material-ui/core/colors/brown';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import ItemQuality from '../server-first/ItemQuality';

import assert from "assert";
import CharacterClass from '../server-first/CharacterClass';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
  }
  interface ThemeOptions {
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    timeFlowing: Palette['success'];
    timeStopped: Palette['warning'];

    poorItemQuality: Palette['primary'];
    commonItemQuality: Palette['primary'];
    uncommonItemQuality: Palette['primary'];
    rareItemQuality: Palette['primary'];
    epicItemQuality: Palette['primary'];
    legendaryItemQuality: Palette['primary'];

    mage: Palette['primary'];
    priest: Palette['primary'];
    rogue: Palette['primary'];
    warrior: Palette['primary'];
  }
  interface PaletteOptions {
    timeFlowing?: PaletteOptions['success'];
    timeStopped?: PaletteOptions['warning'];

    poorItemQuality?: PaletteOptions['primary'];
    commonItemQuality?: PaletteOptions['primary'];
    uncommonItemQuality?: PaletteOptions['primary'];
    rareItemQuality?: PaletteOptions['primary'];
    epicItemQuality?: PaletteOptions['primary'];
    legendaryItemQuality?: PaletteOptions['primary'];

    mage?: PaletteOptions['primary'];
    priest?: PaletteOptions['primary'];
    rogue?: PaletteOptions['primary'];
    warrior?: PaletteOptions['primary'];
  }
}

export function ItemQualityToColor(itemQuality: ItemQuality, theme: Theme) {
  if (itemQuality === ItemQuality.Poor) {
    return theme.palette.poorItemQuality[theme.palette.type];
  } else if (itemQuality === ItemQuality.Common) {
    return theme.palette.commonItemQuality[theme.palette.type];
  } else if (itemQuality === ItemQuality.Uncommon) {
    return theme.palette.uncommonItemQuality[theme.palette.type];
  } else if (itemQuality === ItemQuality.Rare) {
    return theme.palette.rareItemQuality[theme.palette.type];
  } else if (itemQuality === ItemQuality.Epic) {
    return theme.palette.epicItemQuality[theme.palette.type];
  } else {
    assert(itemQuality === ItemQuality.Legendary);
    return theme.palette.legendaryItemQuality[theme.palette.type];
  }
}

export function ItemQualityToColorString(itemQuality: ItemQuality, theme: Theme) {
  if (itemQuality === ItemQuality.Poor) {
    return `poorItemQuality.${theme.palette.type}`;
  } else if (itemQuality === ItemQuality.Common) {
    return `commonItemQuality.${theme.palette.type}`;
  } else if (itemQuality === ItemQuality.Uncommon) {
    return `uncommonItemQuality.${theme.palette.type}`;
  } else if (itemQuality === ItemQuality.Rare) {
    return `rareItemQuality.${theme.palette.type}`;
  } else if (itemQuality === ItemQuality.Epic) {
    return `epicItemQuality.${theme.palette.type}`;
  } else {
    assert(itemQuality === ItemQuality.Legendary);
    return `legendaryItemQuality.${theme.palette.type}`;
  }
}

export function CharacterClassToColor(characterClass: CharacterClass, theme: Theme) {
  if (characterClass === CharacterClass.Mage) {
    return theme.palette.mage[theme.palette.type];
  } else if (characterClass === CharacterClass.Priest) {
    return theme.palette.priest[theme.palette.type];
  } else if (characterClass === CharacterClass.Rogue) {
    return theme.palette.rogue[theme.palette.type];
  } else {
    assert(characterClass === CharacterClass.Warrior);
    return theme.palette.warrior[theme.palette.type];
  }
}

export default function createServerFirstTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
    palette: {
      type: 'dark',
      timeFlowing: {
        light: green[300],
        main: green[500],
        dark: green[700],
      },
      timeStopped: {
        light: orange[300],
        main: orange[500],
        dark: orange[700],
      },
      poorItemQuality: {
        light: grey[300],
        main: grey[400],
        dark: grey[500],
      },
      commonItemQuality: {
        light: grey[50],
        main: grey[100],
        dark: grey[200],
      },
      uncommonItemQuality: {
        light: green[300],
        main: green[400],
        dark: green[500],
      },
      rareItemQuality: {
        light: blue[600],
        main: blue[700],
        dark: blue[800],
      },
      epicItemQuality: {
        light: deepPurple[600],
        main: deepPurple[700],
        dark: deepPurple[800],
      },
      legendaryItemQuality: {
        light: orange[600],
        main: orange[700],
        dark: orange[800],
      },
      mage: {
        light: lightBlue[500],
        main: lightBlue[500],
        dark: lightBlue[500],
      },
      priest: {
        light: grey[50],
        main: grey[50],
        dark: grey[50],
      },
      rogue: {
        light: yellow[500],
        main: yellow[500],
        dark: yellow[500],
      },
      warrior: {
        light: brown[500],
        main: brown[500],
        dark: brown[500],
      },
    }
  })
}