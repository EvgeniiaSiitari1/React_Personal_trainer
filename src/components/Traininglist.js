import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


export default function Traininglist () {

const [trainings, setTrainings] = useState([]);

useEffect(()=> fetchData(), []);

const fetchData = () => {
    fetch ('https://customerrest.herokuapp.com/gettrainings')
    .then (response => response.json())
    .then (data => setTrainings(data))
}

const deleteTraining = (id) => {
    const url='https://customerrest.herokuapp.com/api/trainings/' + id
    if (window.confirm('Are you sure you want to delete this training?'))
fetch(url, {method: 'DELETE'})
.then (response => fetchData())
.catch(err=>console.error(err))
}

//react-table

const columns = [

    {
        sortable: false,
        filterable: false,
        Header: 'Actions',
        accessor: 'id',
        Cell: row => 
        <Tooltip title="Delete">
        <IconButton >
        <DeleteIcon fontSize="small" color="secondary" onClick={() => deleteTraining(row.value)}/>
     </IconButton>
       </Tooltip>
    },

    {
        Header: 'Activity',
        accessor: 'activity'
    },

    {
        Header: 'Date',
        accessor: 'date',
        Cell: row => moment(row.value).format('LLL')
    },

    {
        Header: 'Duration (min)',
        accessor: 'duration'
    },

    {
        id: "Customer",
        Header: "Customer",
        accessor: row => `${row.customer.firstname} ${row.customer.lastname}`,
    }
]

    return (
        <div  className="App">
             <h1>Trainings</h1>
            <ReactTable filterable={true} data={trainings} columns = {columns}/>
        </div>
    );
}