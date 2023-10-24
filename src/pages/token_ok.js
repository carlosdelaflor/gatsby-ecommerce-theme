import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import BBVASvgImg from '../components/bbva/icons/bbvaIcon';
import { bbvaPrimaryColor } from '../components/bbva/constants';
import { AppBar,Button,Divider,Grid,Paper,Stack, Toolbar, Typography } from '@mui/material';
import BBVABkgImg from '../../static/bbva/bbva-bkg.jpeg';
import InfoIcon from '@mui/icons-material/Info';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

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
                  justifyContent: 'center',
                  display: 'flex',
                  backgroundImage: `url(${BBVABkgImg})` }}>
          <Stack sx={{display:'flex',alignItems: 'center'}}>
            <Box>
              <Typography component={"h1"} color={'white'} fontSize={'25px'} fontWeight={'bold'} paragraph>Operación Exitosa</Typography>
            </Box>
            <Box>
              <Typography component={"h1"} color={'white'} paragraph textAlign={'center'}>01 de Noviembre de 2023, 19:05 h</Typography>
            </Box>
          </Stack>         
        </Box>

        <Paper elevation={10} sx={{marginTop: '10px', width:'90%', alignSelf: 'center'}}>
            <Stack sx={{marginLeft: '15px'}}>

              <Box sx={{marginTop: '10px'}} >
                <Typography paragraph fontWeight={'bold'} >
                    Datos de la Operación
                </Typography>
              </Box>

              <Box sx={{marginTop: '10px', marginBottom: '15px'}} >
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>Folio de Operación:
                  </Grid>
                  <Grid item xs={8}>1121344343
                  </Grid>
                </Grid>
              </Box>

            </Stack>
        </Paper>

        <Paper elevation={10} sx={{marginTop: '10px', width:'90%', alignSelf: 'center'}}>
            <Stack sx={{marginLeft: '15px'}}>

              <Box sx={{marginTop: '10px'}} >
                <Typography paragraph fontWeight={'bold'} >
                    Datos de los Productos Solicitados
                </Typography>
              </Box>

              <Box sx={{marginTop: '10px', marginBottom: '15px'}} >
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>Cuenta Asociada:
                  </Grid>
                  <Grid item xs={8}>455232323
                  </Grid>
                  <Grid item xs={15}><Divider />
                  </Grid>
                  <Grid item xs={8}>Producto:
                  </Grid>
                  <Grid item xs={8}>Credito Hipotecario BBVA
                  </Grid>
                  <Grid item xs={8}>Importe:
                  </Grid>
                  <Grid item xs={8}>S/. 250,000.00
                  </Grid>
                  <Grid item xs={8}>Plazo:
                  </Grid>
                  <Grid item xs={8}>10 años
                  </Grid>
                  <Grid item xs={8}>Importe:
                  </Grid>
                  <Grid item xs={8}>S/. 3000.00
                  </Grid>
                  <Grid item xs={15}><Divider />
                  </Grid>
                </Grid>
              </Box>

            </Stack>
        </Paper>


        <Paper elevation={5} sx={{marginTop: '10px', backgroundColor: '#D3D3D3', width:'90%', alignSelf: 'center'}}>
            <Stack sx={{marginLeft: '15px'}}>

              <Box sx={{marginTop: '10px', justifyContent: 'center',
                  display: 'flex'}} >
                <InfoIcon sx={{ color: green[500] }} fontSize="large"/>
              </Box>

              <Box sx={{marginTop: '10px', marginBottom: '15px'}} >
                <Typography paragraph fontWeight={'bold'} >
                   Las obligaciones del crédito se harán efectivas una vez que sea aprobado. Recibirás un email con las condiciones finales del crédito.
                  </Typography>
              </Box>

            </Stack>
        </Paper>

        <Box sx={{ marginTop: '10px',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
                  display: 'flex', }}>
                <Box sx={{maxWidth: '50%'}}>
                  <Button variant="contained" href="/" >Aceptar</Button>
                </Box>
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

