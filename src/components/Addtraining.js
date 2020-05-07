import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Tooltip from '@material-ui/core/Tooltip';


export default function Addtraining (props) {
    const [open, setOpen] = React.useState(false);
    const [sport, setSport] = React.useState({
        activity: '', date: '', duration: ''})
  
    const handleClickOpen = () => {
      console.log(props.sport); 
      setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleInputChange = (e) => {
        setSport({...sport, [e.target.name]: e.target.value})
      }
    
      const addSport = () => {
          props.saveTraining(sport, props.sport.links[0].href);
          handleClose()

      }

      return (
        <div>
        <Tooltip title="Add training">
        <Button> 
            <AddBoxRoundedIcon style={{margin: 10}} variant="filled"  onClick={handleClickOpen}>
          </AddBoxRoundedIcon>
        </Button> 
        </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add new training</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                name="activity"
                value={sport.activity}
                onChange={e => handleInputChange(e)}
                label="activity"
                fullWidth
            />

            <TextField
                margin="dense"
                name="date"
                value={sport.date}
                onChange={e => handleInputChange(e)}
                // onChange = {e=> handleInputChange(moment(e.value).format('LLL'))}
                label="date"
                fullWidth
            />  

            <TextField
                margin="dense"
                name="duration"
                value={sport.duration}
                onChange={e => handleInputChange(e)}
                label="duration"
                fullWidth
            />

            </DialogContent>
            <DialogActions>
                 <Button onClick={handleClose} color="primary">
                Cancel
                 </Button>
                 <Button onClick={addSport} color="primary">
                Save
                </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
