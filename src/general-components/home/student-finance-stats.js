import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Divider, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const columns = [
  {
    field: 'id',
    headerName: '#', 
    width: 100,
    renderCell: (params) => {
    },
  },
  {
    field: 'studentName', 
    headerName: 'Student Name',
    width: 250,
    renderCell: (params) => {
      const fullName = `${params.row.fname} ${params.row.lname}`;
      return <div>{fullName}</div>;
    },
  },
  { field: 'class', headerName: 'Class', width: 200 },
  { field: 'amount', headerName: 'Amount',  width: 200, renderCell: (params) => {
    return <div>$1,000</div>;
  }, },
  { field: 'paymentStatus', headerName: 'Status', width: 200, renderCell: (params) => {
    return <div>{!params.row.paymentStatus ? 'Not Paid' : params.row.paymentStatus}</div>;
  }, },
  {
    field: 'actions',
    headerName: '',
    width: 200,
  },
];

export default function StudentFinanceStats({ students }) {
  const navigate = useNavigate();
  const handleActionClick = (student) => {
    navigate('/dashboard/edit-student', { state: { student } });
  };


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns.map((col) => {
          if (col.field === 'actions') {
            return {
              ...col,
              renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    onClick={() => handleActionClick(params?.row)}
                    variant="contained"
                    style={{ minWidth: '105px', backgroundColor: "#D72A34", marginRight: '20px' }}
                  >
                   Action
                  </Button>
                  {/* <Button
                    onClick={() => handleAddResult(params?.row)}
                    variant="contained"
                    style={{ minWidth: '85px', backgroundColor: "#000000" }}
                  >
                    Add Result
                  </Button> */}
                </div>
              ),
            };
          }
          return col;
        })}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}