import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import BBVASvgImg from '../components/bbva/icons/bbvaIcon';
import { bbvaPrimaryColor, drawerWidth } from '../components/bbva/constants';
import { AppBar, Divider, Grid, IconButton, Stack, Toolbar } from '@mui/material';
import { Document, Page  } from "react-pdf/dist/esm/entry.webpack";
import MenuIcon from '@mui/icons-material/Menu';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField/TextField';


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { windowRef } = props;
  const [open, setOpen] = React.useState(false);
  const [errorCount, setErrorCount] = React.useState(2);
  const [loadedLastName, setLoadedLastName] = React.useState('Pardo');
  const [loadedDni, setLoadedDni] = React.useState('4573883');

  // This is used only for the example
  const container = windowRef !== undefined ? () => windowRef().document.body : undefined;

  const handleDrawerToggle = () => {
  };

  const onAction = () => {
    /*
    if (window){
      window.opener = null;
      window.open('', '_self');
      window.close();    
    }
     */
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
        <Box marginTop={'65px'}>
            <Stack spacing={3} direction="row" sx={{marginTop: '10px',marginBottom: '10px', justifyContent: 'center'}}>
                <Button variant="outlined" onClick={toggleDrawer(true)}>Resultados</Button>
                <Button variant="outlined" onClick={onAction} color="success">Verificar</Button>
                <Button variant="outlined" onClick={onAction} color="error">Rechazar</Button>
            </Stack >
            <Box display="flex" justifyContent="center">
              <Document file={'/bbva/dni_demo.pdf'}>
                <Page height="760" pageNumber={1}></Page>
              </Document>
            </Box>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                keepMounted: true,
                }}
            >
                <StyledBox
                sx={{
                    position: 'absolute',
                    top: -drawerBleeding,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: 'visible',
                    right: 0,
                    left: 0,
                }}
                >
                <Puller />
                <Typography sx={{ p: 2, color: (errorCount!=0) ? 'red' : '' }}>{errorCount} error(es)</Typography>
                </StyledBox>
                <StyledBox
                sx={{
                    px: 2,
                    pb: 2,
                    height: '100%',
                    overflow: 'auto',
                    display:'flex',
                    justifyContent:'center'
                }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h5'>Valores Esperados</Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={10} sm={5} marginTop="10px" marginBottom="10px">
                                <TextField sx={{width: "95%"}} 
                                    id="vin_input" 
                                    value="Juan"
                                    label="Nombre" 
                                    variant="outlined"
                                    disabled/>
                            </Grid>
                            <Grid item xs={10} sm={5} marginTop="10px" marginBottom="10px">
                                <TextField sx={{width: "95%"}} 
                                    id="dealer_input" 
                                    value="Perez"
                                    label="Apellido" 
                                    variant="outlined" 
                                    disabled/>
                            </Grid>
                            <Grid item xs={10} sm={5} marginTop="10px" marginBottom="10px">
                                <TextField sx={{width: "95%"}} 
                                    id="dni_input" 
                                    value="47293094"
                                    label="DNI" 
                                    variant="outlined" 
                                    disabled/>
                            </Grid>
                        </Grid>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h5'>Valores Leidos</Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={10} sm={5} marginTop="10px" marginBottom="10px">
                                <TextField sx={{width: "95%"}} 
                                    id="vin_input_1" 
                                    value="Juan"
                                    label="Nombre" 
                                    variant="outlined"
                                    disabled/>
                            </Grid>
                            <Grid item xs={10} sm={5} marginTop="10px" marginBottom="10px">
                                <TextField sx={{width: "95%"}} 
                                    id="dealer_input_1" 
                                    value={loadedLastName}
                                    label="Apellido" 
                                    variant="outlined" 
                                    error={loadedLastName !== 'Perez'}
                                    onChange={(e) => {
                                      setLoadedLastName(e.target.value);
                                    }}
                                    helperText={(loadedLastName !== 'Perez')?"Valor Incorrecto":''}/>
                            </Grid>
                            <Grid item xs={10} sm={5} marginTop="10px" marginBottom="10px">
                                <TextField sx={{width: "95%"}} 
                                    id="dni_input_1" 
                                    value={loadedDni}
                                    label="DNI"
                                    error={loadedDni !== '47293094'}
                                    onChange={(e) => {
                                      setLoadedDni(e.target.value);
                                      if (e.target.value == '47293094')
                                        setErrorCount(0)
                                    }}
                                    helperText={(loadedDni !== '47293094')?"Valor Incorrecto": ''}
                                    variant="outlined"/>
                            </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </div>
                  </LocalizationProvider>
                </StyledBox>
            </SwipeableDrawer>
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

