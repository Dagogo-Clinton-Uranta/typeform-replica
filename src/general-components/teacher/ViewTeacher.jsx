import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Divider, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const columns = [
  {
    field: 'id',
    headerName: '#', // Header name
    width: 100,
    renderCell: (params) => {
    },
  },
  { field: 'registrationId', headerName: 'Registration ID', width: 200 },
  { field: 'fname', headerName: 'First Name', width: 200 },
  { field: 'lname', headerName: 'Last Name', width: 200 },
  { field: 'gender', headerName: 'Gender', width: 200 },
  { field: 'dob', headerName: 'DOB', width: 200 },
  {
    field: 'actions',
    headerName: '',
    width: 130,
  },
];

export default function ViewTeachers({teachers}) {
  const navigate = useNavigate();
  const handleActionClick = (teacher) => {
    navigate('/dashboard/edit-teacher', { state: { teacher } });
  };
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={teachers}
        columns={columns?.map((col) => {
          if (col.field === 'actions') {
            return {
              ...col,
              renderCell: (params) => (
                <Grid container alignItems="center" justifyContent="flex-end">
                  <Button
                    onClick={() => handleActionClick(params?.row)}
                    variant="contained"
                    style={{ minWidth: '85px', backgroundColor: "#D72A34" }}
                  >
                    Action
                  </Button>
                </Grid>
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