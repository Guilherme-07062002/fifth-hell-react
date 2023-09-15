import { createTheme } from '@mui/material';

const temaPadrao = createTheme({
    palette: {
        background: {
            default: '#FFFFFF',
            paper: 'rgb(229,229,229)',
        },
        primary: {
            main: '#ff623b',
            contrastText: '#FFFF',
        },
        secondary: {
            main: '#535257',
        },
        text: {
            primary: '#535257',
            secondary: '#FFFFF',
        },
    },
    typography: {
        fontFamily: 'PF,sans-serif',
        fontSize: 18,
        htmlFontSize: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
				@font-face {
					font-family: PF;
					src: url(/assets/fonts/light.woff) format("woff");
					font-weight: 300;
					font-style: normal;
					font-display: swap
				}

				@font-face {
					font-family: PF;
					src: url(/assets/fonts/regular.woff) format("woff");
					font-weight: 400;
					font-style: normal;
					font-display: swap
				}

				@font-face {
					font-family: PF;
					src: url(/assets/fonts/bold.woff) format("woff");
					font-weight: 700;
					font-style: normal;
					font-display: swap
				}
      		`,
        },
    },
});

export default temaPadrao;
