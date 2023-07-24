
import * as React from 'react';
import { styled } from '@mui/material/styles';
import BBVABkgImg from '../../../../static/bbva/bbva-bkg.jpeg';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '../constants';
import OfferCard from '../main/offerCard';
import { IconButton, List, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";

const OfferPage = ({navigateTo}) => {
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
            <OfferCard>
                <Typography color="text.secondary" component="h4">
                  Obtén tu Tarjeta de Crédito BBVA y recibe hasta S/240
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
                                Requerimientos
                  </Typography>
                  </Box>

                  <List sx={{
                              listStyleType: 'disc',
                              listStylePosition: 'inside'
                            }}>
                    <ListItem sx={{ display: 'list-item' }}>S/700 ingreso neto mínimo mensual</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Si recibes tu sueldo en el BBVA, solo necesitas una copia de tu DNI.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Continuidad laboral, no menor a 6 meses.</ListItem>
                  </List>
                </Stack>
            </Paper>

            <Paper elevation={12} sx={{marginTop: '25px'}}>
              <Stack>
                <TextField
                  placeholder='Adjuntar DNI'
                  variant="standard"          
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <IconButton component="label">
                        <FileUploadOutlined />
                        <input
                          styles={{display:"none"}}
                          type="file"
                          hidden
                          onChange={()=>{}}
                          name="[licenseFile]"
                        />
                      </IconButton>
                    ),
                  }}
                />
                <TextField
                  placeholder='Adjuntar Boleta de Pago'
                  variant="standard"          
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <IconButton component="label">
                        <FileUploadOutlined />
                        <input
                          styles={{display:"none"}}
                          type="file"
                          hidden
                          onChange={()=>{}}
                          name="[boleta]"
                        />
                      </IconButton>
                    ),
                  }}
                />
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Box>
    )
};


export default OfferPage;