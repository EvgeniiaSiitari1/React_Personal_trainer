import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import 'react-table/react-table.css';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import "bootstrap/dist/css/bootstrap.min.css";

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

const columns = [

    {   sortable: false,
        filterable: false,
        Header: 'Actions',
        accessor: 'links.0.href',
        Cell: row => <Button size = "medium" variant="text" color="secondary" endIcon={<DeleteIcon />} onClick={() => deleteCustomer(row.value)}></Button>

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
    }

]
    return (
            <div className="App">
    
     <h1>Customers</h1> 
     <Addcustomer saveCustomer={saveCustomer} />
            <ReactTable filterable={true} data={customers} columns = {columns}/>
        </div>
    );
}