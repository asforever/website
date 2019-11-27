import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green, cyan, amber} from '@material-ui/core/colors';

const mainTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: cyan,
        secondary: green,
        inherit: amber,
    },
    typography: {
        fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },

    overrides: {
        MuiDivider: {
            root: {
                backgroundColor: `#383838`,
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: `rgba(0,0,0,0.0)`,
                border: `1px solid #383838`
            }
        },
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: `none`
            }
        }
    },

    self: {
        boxShadow: `20px 14px 20px 10px rgba(0, 0, 0, 0.43)`,
        scrollBar: {
            '&::-webkit-scrollbar': {
                width: '0em'
            },
            /*        '&::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        outline: '1px solid slategrey'
                    }*/
        },
        color: `#eee`,
        opacityBg: `rgba(0,0,0,0)`,
        bgImg0: `radial-gradient(circle, #424242  0%, #000000 100%)`,
        bgImg1: `#929493`,
        border: `1px solid #383838`,
        fontStyle0: {
            fontWeight: `normal`,
            color: `#373b9f`,
        },
        fontStyle1: {
            fontWeight: `normal`,
            color: `#382c2d`,
        },
    },
});

export {mainTheme};
