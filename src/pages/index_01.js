import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/material';
import BBVASvgImg from '../components/bbva/icons/bbvaIcon';
import BBVAMainPage from '../components/bbva/main/mainPage';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import LoanOfferPage from '../components/bbva/offer/loanOfferPage';
import { bbvaPrimaryColor, drawerWidth } from '../components/bbva/constants';
import BBVACredHipoImg from '../../static/bbva/bbva-cred-hipo.jpg';


function BBVAResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('main');

  const navigateTo = (path) => {
    setCurrentPage(path);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{
          backgroundColor: bbvaPrimaryColor,
        }}/>
      <Divider />
      <List>
        <ListItem key={'mk-Tarjetas'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CreditCardIcon sx={{ color: bbvaPrimaryColor }}/>
            </ListItemIcon>
            <ListItemText primary={'Tarjetas'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'mk-Inversiones'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MonetizationOnIcon sx={{ color: bbvaPrimaryColor }}/>
            </ListItemIcon>
            <ListItemText primary={'Inversiones'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'mk-Ahorros'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SavingsIcon sx={{ color: bbvaPrimaryColor }}/>
            </ListItemIcon>
            <ListItemText primary={'Ahorros'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: bbvaPrimaryColor,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, 
                  display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" justifyContent="center" width="100%">
            <BBVASvgImg></BBVASvgImg>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {(currentPage === 'main') && <BBVAMainPage navigateTo={navigateTo} 
                                          offerTitle={'Obtén tu Crédito Hipotecario BBVA'} 
                                          offerImg={BBVACredHipoImg}
                                          offerLink={'loanOffer'}/>}
      {(currentPage === 'loanOffer') && <LoanOfferPage navigateTo={navigateTo}/>}
    </Box>
  );
}

BBVAResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default BBVAResponsiveDrawer;

