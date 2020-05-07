import React, {useState, useEffect} from 'react';
import '../App.css';
import ReactTable from 'react-table';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import 'react-table/react-table.css';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import "bootstrap/dist/css/bootstrap.min.css";
import Addtraining from './Addtraining';
import Tooltip from '@material-ui/core/Tooltip';


export default function Customerlist () {
const [customers, setCustomers] = useState([]);

useEffect(()=> fetchData(), []);

const fetchData = () => {
    fetch ('https://customerrest.herokuapp.com/api/customers')
    .then (response => response.json())
    .then (data => setCustomers(data.content))
}

const deleteCustomer = (link) => {
    if (window.confirm('Are you sure you want to delete this customer?'))
fetch(link, {method: 'DELETE'})
.then (response => fetchData())
.catch(err=>console.error(err))
}

const saveCustomer = (customer) => {
fetch ('https://customerrest.herokuapp.com/api/customers', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
})
.then (response => fetchData())
.catch(err=>console.error(err))
}

const updateCustomer = (customer, link) => {
fetch(link, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
 })
 .then(response => fetchData())
 .catch (err=>console.error(err))
}

const saveTraining = (trainings, link) => {
    fetch ('https://customerrest.herokuapp.com/api/trainings', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {    
        'date':  new Date(trainings.date).toISOString(),    
        'activity': trainings.activity,    
        'duration': trainings.duration,    
        'customer': link,
        }
    )
    })
    .then(response=> fetchData())
    .catch(err => console.error(err))
}


const columns = [

    {   sortable: false,
        filterable: false,
        Header: 'Actions',
        accessor: 'links.0.href',
        Cell: row => 
        <Tooltip title="Delete">
             <IconButton >
          <DeleteIcon fontSize="small" color="secondary" onClick={() => deleteCustomer(row.value)}/>
        </IconButton>
            </Tooltip>
    },

     {  
         sortable: false,
         filterable: false,
     Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
       
   },

    {
        Header: 'First name',
        accessor: 'firstname'
    },

    {
        Header: 'Second name',
        accessor: 'lastname',
    },

    {
        Header: 'Email',
        accessor: 'email',
    },

    {
        Header: 'Phone',
        accessor: 'phone',
    },

    {
        Header: 'Address',
        accessor: 'streetaddress',
    },

    {
        Header: 'Postcode',
        accessor: 'postcode',
    },

    {
        Header: 'City',
        accessor: 'city',
    },

    {  
        Header: 'New training',   
        sortable: false,
        filterable: false,
        Cell: row => <Addtraining saveTraining={saveTraining} sport={row.original}/>
      
    }
]
    return (
            <div>
     <h1>Customers
    <Addcustomer saveCustomer={saveCustomer}/></h1>
    <ReactTable style ={{margin:10 }} filterable={true} data={customers} columns = {columns}/>
        </div>
    );
}