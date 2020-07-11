import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const fontFamilies = ['Overpass', 'Open Sans'].join(',');

let theme = createMuiTheme();
theme = createMuiTheme({
    typography: {
        fontFamily: fontFamilies,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        subtitle1: {
            color: grey[600],
        },
    },
    overrides: {
        MuiLink: {
            root: {
                cursor: 'pointer',
                fontWeight: theme.typography.fontWeightMedium,
                fontFamily: fontFamilies,
                transition: '0.2s all',
                '&:hover': {
                    textShadow: `0 0 .2px currentColor`,
                },
            },
        },
        MuiDialog: {
            paper: {
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
            },
        },
        MuiDialogActions: {
            root: {
                marginTop: theme.spacing(1),
                padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`, // match DialogTitle and DialogContent
            },
        },
        MuiIconButton: {
            root: {
                boxSizing: 'content-box',
            },
        },
        MuiSvgIcon: {
            root: {
                width: '100%',
                height: '100%',
            },
        },
    },
    props: {
        MuiButton: {
            variant: 'contained',
            color: 'primary',
        },
        MuiLink: {
            underline: 'none',
        },
    },
});

export default theme;
