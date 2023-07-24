import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

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
      <TableContainer component={Paper} >
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
  };

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
      <Box >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Cuentas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TablaCuentas/>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };

export default CuentasSection;
  