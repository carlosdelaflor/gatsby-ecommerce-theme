import * as React from 'react';
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import axios from 'axios';

const mockServerURL = "https://a9fcd5e5-073a-4af9-aa57-b5ed72cf0bb6.mock.pstmn.io/";
const axiosMockServerclient = axios.create({
    baseURL: mockServerURL 
  });

const AUCTION_LOCATIONS = [
    { label: 'Auto Auction', zip: 1592 , value: '1592 - Z66 Auto Auction'},
    { label: 'Honda Auction', zip: 1765 , value: '1765 - P56 Honda Auction'},
];

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
                <DataGrid rows={props.results} columns={columns} />
            </div>
            );
}

const SearchPanel = (props) => {
    const [searchResults, setSearchResults] = React.useState([]);
    const onSearch = (resuts) => {
        setSearchResults(resuts);
    }
    return (
        <Box>
            <SearchPanelCriteria onSearch={onSearch}></SearchPanelCriteria>
            {(searchResults && searchResults.length > 0) && 
              <SearchResults results={searchResults}/> }
        </Box>

    );
}

export default SearchPanel;