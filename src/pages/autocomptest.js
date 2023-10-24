import * as React from 'react';
import { Autocomplete, Box, Button, Drawer, Grid, IconButton, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid, GridCloseIcon } from '@mui/x-data-grid';
import axios from 'axios';

const mockServerURL = "https://a9fcd5e5-073a-4af9-aa57-b5ed72cf0bb6.mock.pstmn.io/";
const axiosMockServerclient = axios.create({
    baseURL: mockServerURL 
  });

const AUCTION_LOCATIONS = [
    { label: 'Auto Auction', zip: 1592 , value: '1592 - Z66 Auto Auction'},
    { label: 'Honda Auction', zip: 1765 , value: '1765 - P56 Honda Auction'},
];

const DetailInfoGrid = (props) => {
    const rows = [];
    Object.entries(props.data).forEach(([key, value]) => {
        rows.push({'id': key+value,'key': key, 'value': value});
    });

    const columns = [
        { field: 'key', headerName: 'Attribute', width: 200, headerClassName: 'detail-table-header' },
        { field: 'value', headerName: 'Value', width: 250, headerClassName: 'detail-table-header'},
      ];

    return (
        <Box 
            sx={{
            marginTop: '10px',
            '& .detail-table-header': {
              color: '#fff',
              backgroundColor: '#1976d2',
            },
          }}>
            <Box sx={{
                width: '100%',
                marginBottom: '15px',
                marginLeft: '10px'
            }}>
                <Typography container='h3' fontWeight={'bold'}>{props.title}</Typography>
            </Box>
            <DataGrid 
                hideFooterRowCount={true}
                hideFooter={true}
                hideFooterPagination={true}
                rows={rows} 
                columns={columns} 
                rowHeight={30}/>
        </Box>
    )
}


const VehicleDetail = (props) => {
    const paymentInfo = props.details.paymentInfo;
    const arbitrationInfo = props.details.arbitrationInfo;
    const feeInfo = props.details.feeInfo;
    const titleInfo = props.details.titleInfo;
    const salesInfo = props.details.salesInfo;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display={'flex'} justifyContent={'space-between'} marginTop={'10px'}>
                    <Typography sx={{marginLeft: '10px'}} container='h3' fontWeight={'bold'}>Vehicle Details</Typography>
                    <IconButton aria-label="delete" onClick={props.onClose}>
                        <GridCloseIcon  />
                    </IconButton>
                </Box>
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
                <DetailInfoGrid title={'Payment Information'} data={paymentInfo} />
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
                <DetailInfoGrid title={'Arbitration Information'} data={arbitrationInfo} />
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
                <DetailInfoGrid title={'Fee Details'} data={feeInfo} />
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
                <DetailInfoGrid title={'Title Information'} data={titleInfo} />
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
                <DetailInfoGrid title={'Sale Information'} data={salesInfo} />
            </Grid>
        </Grid>
    );
}

const AuctionSelect = (props) => {
    return (
      <Autocomplete
        value={props.value}
        onChange={(event, newValue) => {
            props.setValue(newValue);
        }}
        inputValue={props.inputValue}
        onInputChange={(event, newInputValue) => {
            props.setInputValue(newInputValue);
        }}
        disablePortal
        id="aunction-input"
        options={AUCTION_LOCATIONS}
        sx={{ width: "95%" }}
        placeholder = "Search by Auction Location"
        renderInput={(params) => 
            <TextField {...params}                             
            label="Search by Auction Location" />
        }
      />
    );
  }


const SearchPanelCriteria = (props) => {
    const [vinValue, setVinValue] = React.useState('');
    const [dealerValue, setDealerValue] = React.useState('');
    const [auctionValue, setAuctionValue] = React.useState(undefined);
    const [auctionInputValue, setAuctionInputValue] = React.useState('');
    const [salesDate, setSalesDate] = React.useState(null);

    const onClear = () => {
        setVinValue('');
        setDealerValue('');
        setAuctionValue(undefined);
        setAuctionInputValue('');
        setSalesDate('');
        setSalesDate(null);
        props.onClear();
    }

    const onSearch = () => {
        axiosMockServerclient.get('sales-transactions/', {
            params: {
            }
          })
          .then(respose => {
             const results = respose.data.data;
             props.onSearch(results);
          })
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={10} sm={2}>
                        <TextField sx={{width: "95%"}} 
                            value={vinValue} 
                            onChange={(changeEvent) => setVinValue(changeEvent.target.value)}
                            id="vin_input" 
                            label="Search by VIN" 
                            variant="outlined"
                            placeholder="Search by VIN" />
                    </Grid>
                    <Grid item xs={10} sm={2}>
                        <TextField sx={{width: "95%"}} 
                            value={dealerValue} 
                            onChange={(changeEvent) => setDealerValue(changeEvent.target.value)}
                            id="dealer_input" 
                            label="Search by Dealer Number" 
                            variant="outlined" 
                            placeholder="Search by Dealer Number"/>
                    </Grid>
                    <Grid item xs={10} sm={2}>
                        <AuctionSelect 
                            value={auctionValue}
                            setValue={setAuctionValue}
                            inputValue={auctionInputValue}
                            setInputValue={setAuctionInputValue}/>
                    </Grid>
                    <Grid item xs={10} sm={2}>
                        <DatePicker 
                        sx={{width: "95%"}}
                        id="dealer_input" 
                        label="Search by Sale Date"
                        value={salesDate}
                        onChange={(newDateValue) => setSalesDate(newDateValue)}/>
                    </Grid>
                    <Grid item xs={3} sm={1} 
                        sx={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button onClick={onSearch} variant="contained">Search</Button>
                    </Grid>
                    <Grid item xs={3} sm={1} 
                        sx={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button onClick={onClear} variant="outlined">Clear</Button>
                    </Grid>
                </Grid>
        </Box>
      </LocalizationProvider>
    );
}

const SearchResults = (props) => {
    const columns = [
        { field: 'vin', headerName: 'VIN', width: 150 },
        { field: 'vehicle', headerName: 'Vehicle', width: 250 },
        { field: 'auction', headerName: 'Auction Location', width: 250 },
        { field: 'salesDate', headerName: 'Sales Date', width: 100 },
        { field: 'buyer', headerName: 'Buyer Name', width: 250 },
        { field: 'seller', headerName: 'Seller Name', width: 250 },
      ];

    return ((props.results && props.results.length>0) && 
            <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
                <DataGrid 
                    rows={props.results} 
                    columns={columns}
                    onRowClick={props.onRowClick} />
            </div>
            );
}

const SearchPanel = (props) => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchDetails, setSearchDetails] = React.useState(null);

    const onSearch = (resuts) => {
        setSearchResults(resuts);
    }
    const onRowClicked = (params, event) => {
        const rowId = params.row.id;
        axiosMockServerclient.get('transactions/'+ rowId, {
            params: {
            }
          })
          .then(response => {
             const details = response.data.details;
             setSearchDetails(details);
             setOpenDrawer(true);
          })
        
      }
    return (
        <Box>
            <SearchPanelCriteria 
                onSearch={onSearch} 
                onClear={()=>{setSearchResults([])}}>
            </SearchPanelCriteria>
            {(searchResults && searchResults.length > 0) && 
            <SearchResults onRowClick={onRowClicked} results={searchResults}/> }
            <Drawer
                anchor={'bottom'}
                open={openDrawer}
                onClose={()=>{setOpenDrawer(false); setSearchDetails(null);}}>
                {searchDetails && <VehicleDetail details={searchDetails} onClose={()=>setOpenDrawer(false)}/>}
            </Drawer>
        </Box>
    );
}

export default SearchPanel;