
import * as React from 'react';
import BBVABkgImg from '../../../../static/bbva/bbva-bkg.jpeg';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '../constants';
import OfferCard from '../main/offerCard';
import { Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BBVACredHipoImg from '../../../../static/bbva/bbva-cred-hipo.jpg';


const LoanOfferPage = ({navigateTo}) => {
    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, 
              p: 3, 
              width: { sm: `calc(100% - ${drawerWidth}px)`,
              backgroundImage: `url(${BBVABkgImg})`
            } }}
        >
        <Toolbar sx={{marginTop: '30px'}}>
          <IconButton
              color="inherit"
              aria-label="back"
              edge="start"
              onClick={()=>navigateTo('main')}
            >
              <BackspaceIcon sx={{color: 'white'}}/>
            </IconButton>
        </Toolbar>
        <Box  width={'100%'} justifyContent={'center'} display={'flex'}>
          <Stack>
            <OfferCard img={BBVACredHipoImg}>
                <Typography color="text.secondary" component="h4">
                  Obtén tu Credito Hipotecario BBVA
                </Typography>
              </OfferCard>

            <Paper elevation={12} sx={{marginTop: '25px'}}>
                <Stack>
                  <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '15px'
                                  }} >
                  <Typography paragraph fontWeight={'bold'} >
                                Terminos y Condiciones
                  </Typography>
                  </Box>

                  <Box sx={{
                              display: 'flex',
                              justifyContent: 'center'
                            }} >
                    <List sx={{
                                width:'90%',
                                left: '-15px'
                              }}>
                      <ListItem key={'doc1'}>
                        <ListItemButton sx={{left: '-20px'}}> 
                            <PictureAsPdfIcon sx={{color: 'red'}}/> 
                            <ListItemText sx={{position: 'relative',left: '10px'}} primary="Solicitud Contrato" /> 
                        </ListItemButton> 
                      </ListItem>
                      <ListItem key={'doc2'}>
                        <ListItemButton sx={{left: '-20px'}}> 
                          <PictureAsPdfIcon sx={{color: 'red'}}/> 
                          <ListItemText sx={{ position: 'relative',left: '10px'}} primary="HRI" /> 
                        </ListItemButton> 
                      </ListItem>
                      <ListItem divider key={'doc3'}>
                        <ListItemButton sx={{left: '-20px'}}> 
                          <PictureAsPdfIcon sx={{color: 'red'}}/> 
                          <ListItemText sx={{ position: 'relative',left: '10px'}} primary="Contrato Credito Hipotecario" /> 
                        </ListItemButton> 
                      </ListItem>
                      <ListItem divider>
                        <Checkbox edge="start"/>
                        <ListItemText sx={{position: 'relative',left: '5px'}} primary="Autorizo la consulta a mi historial crediticio" /> 
                      </ListItem>
                      <ListItem divider>
                        <Checkbox edge="start"/>
                        <ListItemText sx={{position: 'relative',left: '5px'}} primary="He leido y acepto los términos y condiciones de la contratación del producto requerido" /> 
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
            </Paper>

            <Box sx={{ marginTop: '15px',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
                  display: 'flex', }}>
                <Box sx={{maxWidth: '50%'}}>
                  <Button variant="contained" href="/token" >Aceptar</Button>
                </Box>
        </Box>

          </Stack>
        </Box>
      </Box>
    )
};


export default LoanOfferPage;