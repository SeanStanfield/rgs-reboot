import {alpha, createTheme, css, lighten, responsiveFontSizes} from "@mui/material";
import {grey, orange} from "@mui/material/colors";
import AlfaSlabOne from './fonts/AlfaSlabOne.ttf';

let theme = createTheme({
	status: {
		danger: orange[500],
	},

	palette: {
		primary: {
			main: '#155AA6',
			dark: '#284571',
			secondary: '#E7CE4F'
		},
		common: {
			black: '#333333'
		}
	},
	typography: {
		h1: {
			fontFamily: ['Alfa slab one'].join(', '),
			letterSpacing: '2px',
			fontSize: '4rem',
			lineHeight: 1.1,
			fontWeight: 500,
		},
		h2: {
			fontFamily: ['Alfa slab one'].join(', '),
			fontSize: '3rem',
			letterSpacing: '1px',
			color: '#2c2c2c',
			lineHeight: 1.2,
			fontWeight: 500,
			textTransform: 'uppercase'
		},
		h3: {
			fontSize: '2rem',
			lineHeight: 1.5,
			fontWeight: "bold",
			textTransform: 'uppercase',
			color: '#303030'
		},
		h4: {
			fontSize: '1.3rem',
			lineHeight: 1.5,
			fontWeight: 700,
		},
		h5: {
			lineHeight: 1.5,
			fontWeight: 700,
		},
		h6: {
			lineHeight: 1.5,
			fontWeight: 700,
		},
		body1: {
			fontFamily: ['Roboto Condensed'].join(', '),
			fontSize: '1.25rem',
			lineHeight: 1.6,
		},
		body2: {
			lineHeight: 1.5,
			fontSize: '1.5rem',
		},
		subtitle1: {
			fontSize: '1.25rem',
			fontWeight: 700,
		},
	},

});


theme.components = {
	MuiContainer: {
		styleOverrides: {
			root: css`
                ${theme.breakpoints.up('sm')} {
                    padding-left: ${theme.spacing(6)};
                    padding-right: ${theme.spacing(6)};
                }

                ${theme.breakpoints.up('lg')} {
                    padding-left: ${theme.spacing(3)};
                    padding-right: ${theme.spacing(3)};
                }
			`,
		},
	},
	MuiLink: {
		styleOverrides: {
			root: css`
                color: ${theme.palette.secondary.main};
                text-decoration-color: ${lighten(theme.palette.secondary.main, 0.3)};

                &:hover {
                    text-decoration-color: ${theme.palette.secondary.main};
                }
			`,
		},
	},
	MuiButton: {
		styleOverrides: {
			root: css`
                border-radius: 4px;
                font-weight: 700;
                text-transform: uppercase;
                padding: 0.75rem 1rem;
                box-shadow: none;
                font-size: 20px;
				${theme.breakpoints.down("md")}{
					font-size: 16px;
				}
				
			`,
			contained: css`
                color: ${theme.palette.common.black};
                background-color: #e7ce4f;
				
				&:hover{
					color: ${theme.palette.common.white};
				}
			`,
			outlined: css`
                border: 2px solid ${theme.palette.common.white};
                background-color: transparent;
                color: ${theme.palette.common.white};
                transition: ${theme.transitions.create(['border', 'color', 'background-color'], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.enteringScreen,
                })};

                &:hover {
                    border: 2px solid ${alpha(theme.palette.primary.secondary, 0.85)};
                    background-color: ${alpha(theme.palette.primary.secondary, 0.05)};
                    color: ${theme.palette.primary.secondary};
                }
			`,
		},
		variants: [
			{
				props: {variant: 'inverse'},
				style:
					theme?.palette?.mode === 'light'
						? {
							backgroundColor: theme.palette.common.black,
							color: theme.palette.common.white,
							'&:hover, &:focus': {
								backgroundColor: grey['900'],
								color: theme.palette.common.white,
							},
						}
						: {
							backgroundColor: theme.palette.common.white,
							color: theme.palette.common.black,
							'&:hover, &:focus': {
								backgroundColor: grey['200'],
								color: theme.palette.common.black,
							},
						},
			},

			{
				props: {color: 'white'},
				style: {
					backgroundColor: theme.palette.common.white,
					color: theme.palette.common.black,
					'&:hover, &:focus': {
						backgroundColor: grey['200'],
						color: theme.palette.common.black,
					},
				},
			},
		],
	},
	MuiIconButton: {
		styleOverrides: {
			root: css`
                box-shadow: none;
			`,
		},
		variants: [
			{
				props: {color: 'primary'},
				style: css`
                    background-color: ${theme.palette.primary.main};
                    color: ${theme.palette.common.black};

                    &:hover, &:focus {
                        background-color: ${theme.palette.primary.dark};
                    }

                ,
				`,
			},
			{
				props: {color: 'secondary'},
				style: css`
                    background-color: ${theme.palette.common.black};
                    color: ${theme.palette.common.white};

                    &:hover, &:focus {
                        background-color: ${theme.palette.primary.main};
                    }

                ,
				`,
			},
		],
	},
	MuiCardContent: {
		styleOverrides: {
			root: css`
                &:last-child {
                    padding-bottom: ${theme.spacing(5)};
                }

                padding-top: ${theme.spacing(4)};
                padding-bottom: ${theme.spacing(4)};
                padding-left: ${theme.spacing(5)};
                padding-right: ${theme.spacing(5)};

                ${theme.breakpoints.up('lg')} {
                    padding-left: ${theme.spacing(6)};
                    padding-right: ${theme.spacing(6)};
                    padding-bottom: ${theme.spacing(5)};
                }
			`,
		},
	},
	MuiAccordion: {
		styleOverrides: {
			root: css`
                background-color: transparent;
                box-shadow: none;

                &::before {
                    background-color: transparent;
                }
			`,
		},
	},
	MuiAccordionSummary: {
		styleOverrides: {
			root: css`
                flex-direction: row-reverse;
                gap: ${theme.spacing(1)};
                padding-left: 0;
			`,
			content: css`
                color: ${theme.palette.common.white};
			`,
			expandIconWrapper: css`
                color: ${theme.palette.common.white};
			`,
		},
	},
	MuiAccordionDetails: {
		styleOverrides: {
			root: css`
                color: ${theme.palette.common.white};
			`,
		},
	},
};

theme = responsiveFontSizes(theme);

export default theme;