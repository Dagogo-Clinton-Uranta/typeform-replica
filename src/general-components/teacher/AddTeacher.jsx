import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@mui/material';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTeacher, uploadDocImages } from 'src/redux/actions/student.action';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  searchInput: {
    background: 'white',
    border: '1px solid #00000026',
    padding: '10px',
    borderRadius: '8px',
    // marginRight: theme.spacing(2),
    width: '100%',
    minWidth: '100%',
    '& .MuiInputBase-input': {
      color: 'grey',
    },
    '& .MuiInputBase-input::placeholder': {
      color: 'grey',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'grey',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
  },
  searchButton: {
    color: '#fff',
    padding: '15px',
    minWidth: '45%',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const AddTeacher = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    fname: '',
    lname: '',
    dob: '',
    email: '',
    gender: '',
    registrationId: '',
    studentshipType: '',
    class: '',
    section: '',
  });
  const [teacherPassportFile, setTeacherPassportFile] = useState({ selectedFile: [], selectedFileName: [] });

  const handleTeacherPassportFile = (event) => {
    setTeacherPassportFile({
      selectedFile: event.target.files[0],
      selectedFileName: event.target.files[0].name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const files = [teacherPassportFile.selectedFile];

    try {
      setLoading(true);
      const urls = await Promise.all(files.map((file) => dispatch(uploadDocImages(file))));

      const [teacherPassportFileUrl] = urls;

      const teacherData = { state, teacherPassportFileUrl };
      dispatch(createTeacher(teacherData, navigate, setLoading));
    } catch (error) {
      console.error('Error uploading images: ', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">First Name</Typography>
          <TextField
            name="fname"
            placeholder="First name"
            fullWidth
            value={state.fname}
            onChange={handleChange}
            className={classes.searchInput}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Last Name</Typography>
          <TextField
            name="lname"
            placeholder="Last name"
            fullWidth
            value={state.lname}
            onChange={handleChange}
            className={classes.searchInput}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Date Of Birth</Typography>
          <TextField
            type="date"
            name="dob"
            placeholder="01/01/1999"
            fullWidth
            value={state.dob}
            onChange={handleChange}
            className={classes.searchInput}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Gender</Typography>
          <select
            name="gender"
            value={state.gender}
            onChange={handleChange}
            className={classes.searchInput}
            style={{ minHeight: '50px', fontSize: '17px', outline: '1px solid #eee' }}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Registration ID</Typography>
          <TextField
            name="registrationId"
            type="number"
            placeholder="00037278488"
            fullWidth
            value={state.registrationId}
            onChange={handleChange}
            className={classes.searchInput}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Studentship Type</Typography>
          <select
            name="studentshipType"
            value={state.studentshipType}
            onChange={handleChange}
            className={classes.searchInput}
            style={{ minHeight: '50px', fontSize: '17px', outline: '1px solid #eee' }}
            required
          >
            <option value=""></option>
            <option value="Male">Boarding</option>
            <option value="Female">Day</option>
          </select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Class</Typography>
          <select
            name="class"
            value={state.class}
            onChange={handleChange}
            className={classes.searchInput}
            style={{ minHeight: '50px', fontSize: '17px', outline: '1px solid #eee' }}
            required
          >
           <option value="">Select Class</option>
            <option value="JSS 1">JSS 1</option>
            <option value="JSS 2">JSS 2</option>
            <option value="JSS 3">JSS 3</option>
            <option value="SS 1">SS 1</option>
            <option value="SS 2">SS 2</option>
            <option value="SS 3">SS 3</option>
          </select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Section</Typography>
          <select
            name="section"
            value={state.section}
            onChange={handleChange}
            className={classes.searchInput}
            style={{ minHeight: '50px', fontSize: '17px', outline: '1px solid #eee' }}
            required
          >
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Email address</Typography>
          <TextField
            name="email"
            placeholder="Enter email"
            type="email"
            fullWidth
            value={state.email}
            onChange={handleChange}
            className={classes.searchInput}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>

        <Grid item container xs={6} direction="row" alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1">Teacher Passport (Format: PNG, JPEG, JPG)</Typography>
            <TextField
              placeholder="Select a file"
              disabled
              fullWidth
              value={teacherPassportFile.selectedFileName}
              onChange={handleChange}
              className={classes.searchInput}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              component="label"
              variant="contained"
              style={{
                minHeight: '52px',
                minWidth: '145px',
                backgroundColor: '#000000',
                marginTop: '20px',
              }}
            >
              <b>Choose</b>
              <input type="file" style={{ display: 'none' }} onChange={handleTeacherPassportFile} />
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
        <Button
          disabled={loading}
          variant="contained"
          onClick={handleSubmit}
          style={{
            minWidth: '125px',
            backgroundColor: '#762AD7',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '20px',
            marginLeft: '30px',
          }}
        >
          {loading ? 'Loading...' : 'Save'}
        </Button>
      </Grid>
    </div>
  );
};

export default AddTeacher;
