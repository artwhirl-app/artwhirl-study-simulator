import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions, SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { Color } from '@material-ui/core';

export const primaryColor: Partial<SimplePaletteColorOptions> & Partial<Color> = {
  50: '#e8f6ee',
  100: '#c5e8d4',
  200: '#9ed9b8',
  300: '#77ca9c',
  400: '#59be86',
  500: '#3cb371',
  600: '#36ac69',
  700: '#2ea35e',
  800: '#279a54',
  900: '#1a8b42',
  A100: '#c3ffd6',
  A200: '#90ffb4',
  A400: '#5dff91',
  A700: '#43ff80',
  contrastText: '#fff',
};
export const secondaryColor: SimplePaletteColorOptions = {
  light: '#ff4081',
  main: '#f50057',
  dark: '#c51162',
  contrastText: '#fff',
};
export const errorColor: SimplePaletteColorOptions = {
  light: '#e57373',
  main: '#f44336',
  dark: '#d32f2f',
  contrastText: '#fff',
};
export const warningColor: SimplePaletteColorOptions = {
  light: '#ffb74d',
  main: '#ff9800',
  dark: '#f57c00',
  contrastText: 'rgba(0, 0, 0, 0.87)',
};
export const successColor: SimplePaletteColorOptions = {
  light: '#81c784',
  main: '#4caf50',
  dark: '#388e3c',
  contrastText: 'rgba(0, 0, 0, 0.87)',
};
export const infoColor: SimplePaletteColorOptions = {
  light: '#64b5f6',
  main: '#2196f3',
  dark: '#1976d2',
  contrastText: '#fff',
};

export const grayColor: Color = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
};

const ThemePalette: PaletteOptions = {
  type: 'light',
  primary: primaryColor,
  action: {
    active: 'rgba(0,0,0,0.54)',
    hover: 'rgba(0,0,0,0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0,0,0, 0.14)',
    disabled: 'rgba(0,0,0, 0.26)',
  },
  background: { paper: '#fff', default: '#fafafa' },
  common: {
    black: '#000',
    white: '#fff',
  },
  contrastThreshold: 3,
  divider: 'rgba(0,0,0, 0.12)',
  secondary: secondaryColor,
  error: errorColor,
  warning: warningColor,
  info: infoColor,
  success: successColor,
  grey: grayColor,
  text: {
    primary: 'rgba(0,0,0,0.87)',
    secondary: 'rgba(0,0,0,0.54)',
    disabled: 'rgba(0,0,0,0.38)',
    hint: 'rgba(0,0,0,0.38)',
  },
  tonalOffset: 0.2,
};

export const theme = createMuiTheme({
  palette: ThemePalette,
  // レスポンシブのブレイクポイント
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 360, // スマホ用
      sm: 768, // タブレット用
      md: 992, // PC用
      lg: 1400,
      xl: 1800,
    },
  },
  typography: {
    // computed = specification * (this.fontSize / 14) * (htmlFontSize / this.htmlFontSize)
    htmlFontSize: 6,
    fontSize: 6,
    h6: {
      fontSize: '1.2rem',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none', // ボタン内アルファベット文字を大文字変換しない
        height: '100%',
        width: '100%',
      },
    },
    MuiCard: {
      root: {
        maxHeight: '100%',
        overflow: 'auto',
      },
    },
    MuiContainer: {
      root: {
        padding: '.5em',
      },
    },
    MuiFab: {
      root: {
        marginLeft: '.25em',
        marginRight: '.25em',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiIcon: {
      root: {
        display: 'flex',
      },
    },
    MuiInputLabel: {
      marginDense: {
        fontSize: '1rem',
      },
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: '6.5px',
        paddingBottom: '6.5px',
      },
      notchedOutline: {
        fontSize: '1rem',
      },
    },
    MuiTab: {
      textColorInherit: {
        opacity: 1,
      },
    },
    MuiTableCell: {
      root: {
        padding: '0.25em 0.5em',
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        borderRight: '1px solid rgba(0, 0, 0, 0.25)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
      },
    },
    MuiTableHead: {
      root: {
        backgroundColor: primaryColor[100],
      },
    },
    MuiTypography: {
      root: {
        textIndent: '1em',
      },
    },
  },
  props: {
    MuiButton: {
      color: 'primary',
      variant: 'contained',
    },
    MuiFormControl: {
      variant: 'outlined',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiGrid: {
      spacing: 4,
    },
    MuiFab: {
      size: 'medium',
    },
    MuiInputLabel: {
      margin: 'dense',
      variant: 'outlined',
      shrink: true,
    },
    MuiList: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
      notched: true,
    },
    MuiSelect: {
      variant: 'outlined',
    },
    MuiTextField: {
      variant: 'outlined',
      autoComplete: 'on',
    },
  },
  spacing: 4,
});
