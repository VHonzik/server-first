import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';


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
        light: grey[400],
        main: grey[500],
        dark: grey[600],
      },
      commonItemQuality: {
        light: grey[50],
        main: grey[100],
        dark: grey[200],
      },
      uncommonItemQuality: {
        light: green[600],
        main: green[700],
        dark: green[800],
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
    }
  })
}