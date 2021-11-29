import { AppBar, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
