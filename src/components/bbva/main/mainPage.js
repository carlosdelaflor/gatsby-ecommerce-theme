import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LinearProgress, Stack, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import BBVABkgImg from '../../../../static/bbva/bbva-bkg.jpeg';
import { drawerWidth } from '../constants';
import SimpleAvatarMenuBar from './avatarMenuBar';
import CuentasSection from './tableCuentas';
import OfferCard from './offerCard';


const IngresosBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  
const EgresosBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#de3309' : '#308fe8',
    },
  }));

const MainPage = ({navigateTo}) => {
    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, 
              p: 3, 
              width: { sm: `calc(100% - ${drawerWidth}px)`,
              backgroundImage: `url(${BBVABkgImg})`
            } }}
        >
        <Toolbar></Toolbar>
        <Box  width={'100%'} justifyContent={'center'} display={'flex'}>
          <Stack>
            <Typography  variant='h6'color={'white'}>
              Ingresos
            </Typography>
            <IngresosBorderLinearProgress variant="determinate" value={100} sx={{width:"230px", height:"18px"}}  />
            <Typography paddingTop={'15px'}  variant='h6'color={'white'}>
              Egresos
            </Typography>
            <EgresosBorderLinearProgress variant="determinate" value={100} sx={{width:"160px", height:"18px"}} />
          </Stack>
        </Box>

        <Box paddingTop={'25px'} width={'100%'} justifyContent={'center'} display={'flex'}>
          <SimpleAvatarMenuBar navigateTo={navigateTo} />
        </Box>

        <Box paddingTop={'25px'} width={'100%'} justifyContent={'center'} display={'flex'}>
          <OfferCard>
            <Typography color="text.secondary" component="div">
              Obtén tu Tarjeta de Crédito BBVA y recibe hasta S/240
            </Typography>
            <Typography color={'#0b65e6'} fontWeight={'bold'} component="a" onClick={()=>navigateTo('ofertas')}>
                  Quiero saber más
            </Typography>
          </OfferCard>
        </Box>

        <Box paddingTop={'25px'} width={'100%'} justifyContent={'center'} display={'flex'}>
          <CuentasSection/>
        </Box>
      </Box>
    )
};


export default MainPage;