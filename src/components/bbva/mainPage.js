import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, CssBaseline, LinearProgress, Paper, Stack, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import BBVABkgImg from '../../../static/bbva/bbva-bkg.jpeg';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const drawerWidth = 240;
const bbvaPrimaryColor = '#072146';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const TablaCuentas = () =>{
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">TIPO Y NÚMERO DE CUENTA</StyledTableCell>
            <StyledTableCell align="center" sx={{ display: { xs: 'none', sm: 'table-cell' }}}>SALDO CONTABLE</StyledTableCell>
            <StyledTableCell align="center">SALDO DISPONIBLE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={'cu-01'}>
              <StyledTableCell align="left">
                <Stack>
                  <Typography color={'#0b65e6'} fontWeight={'bold'}>166-02929202-111</Typography>
                  <Typography>Cuenta Independencia</Typography>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' }}}>S/. 250.00</StyledTableCell>
              <StyledTableCell align="right">S/. 250.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={'cu-02'}>
              <StyledTableCell align="left">
              <Stack>
                  <Typography color={'#0b65e6'} fontWeight={'bold'}>171-02444202-677</Typography>
                  <Typography>Cuenta Ganadora</Typography>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' }}}>S/. 660.00</StyledTableCell>
              <StyledTableCell align="right">S/. 660.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={'cu-03'}>
              <StyledTableCell align="left">
              <Stack>
                  <Typography color={'#0b65e6'} fontWeight={'bold'}>151-02444202-677</Typography>
                  <Typography>Cuenta Indepencia</Typography>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' }}}>S/. 7880.00</StyledTableCell>
              <StyledTableCell align="right">S/. 7880.00</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const CuentasSection = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Cuentas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TablaCuentas/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


const MenuAvatar = ({avatar, label}) => {
    return (
      <Stack display={'flex'} alignItems={'center'}>
        <Avatar sx={{ width: 50, height: 50 }}>
        {avatar}
        </Avatar>
        <Typography color={'white'}>
        {label}  
        </Typography>
      </Stack>
    )
  };

const SimpleAvatarMenuBar = (sx) => {
    return (
        <Stack direction="row" spacing={15}>
          <MenuAvatar avatar={<CreditCardIcon sx={{ color: bbvaPrimaryColor }}/>} label={'Tarjetas'}/>
          <MenuAvatar avatar={<MonetizationOnIcon sx={{ color: bbvaPrimaryColor }}/>} label={'Inversiones'}/>
          <MenuAvatar avatar={<SavingsIcon sx={{ color: bbvaPrimaryColor }}/>} label={'Ahorros'}/>
        </Stack>
    );
}

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

const MainPage = () => {
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
        <Stack>
          <Typography  variant='h6'color={'white'}>
            Ingresos
          </Typography>
          <IngresosBorderLinearProgress variant="determinate" value={100} sx={{width:"450px", height:"18px"}}  />
        </Stack>
        <Stack paddingTop={'15px'}>
          <Typography  variant='h6'color={'white'}>
            Egresos
          </Typography>
          <EgresosBorderLinearProgress variant="determinate" value={100} sx={{width:"250px", height:"18px"}} />
        </Stack>
        <Box paddingTop={'25px'} width={'100%'} justifyContent={'center'} display={'flex'}>
          <SimpleAvatarMenuBar />
        </Box>
        <Box paddingTop={'25px'} width={'100%'} justifyContent={'center'} display={'flex'}>
          <CuentasSection></CuentasSection>
        </Box>
      </Box>
    )
};


export default MainPage;