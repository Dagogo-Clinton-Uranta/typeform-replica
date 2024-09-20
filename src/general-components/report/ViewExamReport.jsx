import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: '#', width: 150 },
  { field: 'subject', headerName: 'Subject', width: 200 },
  { field: 'ca', headerName: 'Continuous Assessment', width: 200 },
  { field: 'testScores', headerName: 'Test scores', width: 200 },
  { field: 'examScores', headerName: 'Exam Scores', width: 200 },
  { field: 'finalGrade', headerName: 'Final Grade', width: 200 },
];

export default function ViewExamReport({ result }) {
  const navigate = useNavigate();

  // Transform subject data into rows for DataGrid
  const rows = Object.entries(result.subjects).map(([subject, data], index) => ({
    id: index + 1,
    subject: subject,
    ca: data.ca || '',
    testScores: data.testScores || '',
    examScores: data.examScores || '',
    finalGrade: data.finalGrade || '',
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
