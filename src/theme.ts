import { createMuiTheme } from '@material-ui/core';

const fontFamilies = ['Overpass', 'Open Sans'].join(',');

let theme = createMuiTheme();
theme = createMuiTheme({
    typography: {
        fontFamily: fontFamilies,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
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
    },
    props: {
        MuiLink: {
            underline: 'none',
        },
    },
});

export default theme;
