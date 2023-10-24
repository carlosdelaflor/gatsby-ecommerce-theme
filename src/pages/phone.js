import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import CellHomeBkgImg from '../../static/bbva/cell-home-bkg-800x450.jpg';
import { Alert } from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

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
            height:'800px' }}>
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