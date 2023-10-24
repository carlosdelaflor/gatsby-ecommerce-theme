import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import CellHomeBkgImg from '../../static/bbva/cell-home-bkg-720x405.jpg';
//import CellHomeBkgImg from '../../static/bbva/cell-home-bkg-800x450.jpg';
//import CellHomeBkgImg from '../../static/bbva/cell-home-bkg-750x422.jpg';
import { Alert } from '@mui/material';

const HEIGHT_VIEWPORT = '720px';
//const HEIGHT_VIEWPORT = '800px';
//const HEIGHT_VIEWPORT = '750px';

function CellPhone(props) {

    const [open, setOpen] = React.useState(false);
    
      const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      React.useEffect(() => {
        setTimeout(() => {
            handleClick();
        }, 2000);
      }, []);

    return (
        <>
        <div style={{ 
            backgroundImage: `url(${CellHomeBkgImg})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: HEIGHT_VIEWPORT }}>
      </div>
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal : 'left' }}
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
                key={'state.Transition.name'}
        >
              <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
    BBVA APP: Continua con la contratación <br></br>
    Revisa los terminos y condiciones para la contratación de tu producto bancario.
  </Alert>
        </Snackbar>
        </>

    );
};

export default CellPhone;