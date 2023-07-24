import * as React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import { bbvaPrimaryColor, drawerWidth } from '../constants';
import { Avatar, Box, Stack, Typography } from '@mui/material';

const MenuAvatar = ({avatar, label, navigateTo}) => {
    return (
      <Stack display={'flex'} alignItems={'center'}>
        <Avatar sx={{ width: 50, height: 50 }} onClick={navigateTo}>
        {avatar}
        </Avatar>
        <Typography color={'white'}>
        {label}  
        </Typography>
      </Stack>
    )
  };

const SimpleAvatarMenuBar = ({navigateTo}) => {
    return (
        <Box width={{xs:'280px', sm: '70%'}}>
          <Stack direction="row" display={'flex'} justifyContent={'space-between'} >
            <MenuAvatar 
              avatar={<CreditCardIcon sx={{ color: bbvaPrimaryColor }} />} 
              navigateTo={()=>navigateTo('ofertas')}
              label={'Tarjetas'}
            />
            <MenuAvatar 
              avatar={<MonetizationOnIcon sx={{ color: bbvaPrimaryColor }}/>}
              navigateTo={()=>navigateTo('ofertas')} 
              label={'Inversiones'}
            />
            <MenuAvatar 
              avatar={<SavingsIcon sx={{ color: bbvaPrimaryColor }}/>} 
              navigateTo={()=>navigateTo('ofertas')}
              label={'Ahorros'}
            />
          </Stack>
        </Box>

    );
};

export default SimpleAvatarMenuBar;