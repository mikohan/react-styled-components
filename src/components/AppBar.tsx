import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

export default function MyAppBar() {
	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{
				borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
			}}
		>
			<Toolbar sx={{ flexWrap: 'wrap' }}>
				<Typography
					variant="h6"
					color="inherit"
					noWrap
					sx={{ flexGrow: 1 }}
				>
					<Link to="/">Company name</Link>
				</Typography>
				<nav>
					<MuiLink
						component={Link}
						to="/pure"
						variant="button"
						color="text.primary"
						sx={{ my: 1, mx: 1.5 }}
					>
						PureDnd
					</MuiLink>
					<MuiLink
						component={Link}
						to="/beautiful"
						variant="button"
						color="text.primary"
						sx={{ my: 1, mx: 1.5 }}
					>
						Beautefull
					</MuiLink>
					<MuiLink
						variant="button"
						color="text.primary"
						href="#"
						sx={{ my: 1, mx: 1.5 }}
					>
						Support
					</MuiLink>
				</nav>
				<Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}
