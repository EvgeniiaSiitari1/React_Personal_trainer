import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


export default function Editcustomer (props) {

    const [open, setOpen] = React.useState(false);
    const [customer,setCustomer] = React.useState({
     firstname: '', lastname: '', email: '', phone: '', streetaddress: '', postcode: '', city: ''  
    })

    const handleClickOpen = () => {
      console.log(props.customer);
      setCustomer({firstname: props.customer.firstname, lastname: props.customer.lastname, email: props.customer.email, 
      phone: props.customer.phone, streetaddress: props.customer.streetaddress, postcode: props.customer.postcode, city: props.customer.city})
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const updateCustomer = () => {
      console.log(props.customer)
        props.updateCustomer(customer, props.customer.links[0].href);
        handleClose();
    }

    const handleinputChange = (e) => {
    setCustomer({...customer,[e.target.name]: e.target.value})
    }
  
    return (
      <div>
         <Tooltip title="Edit customer">
        <IconButton variant="text" color="primary" size="medium" color="primary" aria-label="edit" onClick={handleClickOpen} >
        <EditIcon />
      </IconButton> 
      </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
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
              value={customer.streetaddress}
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
            <Button onClick={updateCustomer} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
        );
    }