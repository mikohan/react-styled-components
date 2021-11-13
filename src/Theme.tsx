import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		lightSuccess: {
			main: string;
			light: string;
		};
	}
	interface PaletteOptions {
		lightSuccess: {
			main: string;
			light: string;
		};
	}
}

export const customTheme = createTheme({
	palette: {
		lightSuccess: {
			main: '#42a5f5',
			light: '#bbdefb',
		},
	},
});
