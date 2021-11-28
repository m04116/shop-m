import { AppBar, Toolbar, Typography } from '@mui/material';

export const Layout = ({ title, children }) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </>
);
