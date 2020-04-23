import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addcustomer (props) {

    const [open, setOpen] = React.useState(false);
    const [customer,setCustomer] = React.useState({
     firstname: '', lastname: '', email: '', phone: '', streetaddress: '', postcode: '', city: ''  
    })
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const addCustomer = () => {
        props.saveCustomer(customer);
        handleClose();
    }

    const handleinputChange = (e) => {
    setCustomer({...customer,[e.target.name]: e.target.value})
    }
  
    return (
      <div>
<Button style={{margin: 10}} variant="text" color="primary" onClick={handleClickOpen}>
Add new customer
</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add new customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              value={customer.firstname}
              onChange={e => handleinputChange(e)}
              label="First name"
              fullWidth
            />
            <TextField
              margin="dense"
              name="lastname"
              value={customer.lastname}
              onChange={e => handleinputChange(e)}
              label="Second name"
              fullWidth
            />
                <TextField
              margin="dense"
              name="email"
              value={customer.email}
              onChange={e => handleinputChange(e)}
              label="Email"
              fullWidth
            />
                <TextField
              margin="dense"
              name="phone"
              value={customer.phone}
              onChange={e => handleinputChange(e)}
              label="Phone"
              fullWidth
            />
                <TextField
              margin="dense"
              name="streetaddress"
              value={customer.address}
              onChange={e => handleinputChange(e)}
              label="Address"
              fullWidth
            />
                <TextField
              margin="dense"
              name="postcode"
              value={customer.postcode}
              onChange={e => handleinputChange(e)}
              label="Post code"
              fullWidth
            />
            <TextField
              margin="dense"
              name="city"
              value={customer.city}
              onChange={e => handleinputChange(e)}
              label="City"
              fullWidth
            />

          </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={addCustomer} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
        );
    }