import { db, fb, auth, storage } from '../../config/firebase';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { notifyErrorFxn, notifySuccessFxn } from 'src/utils/toast-fxn';
import { fetchStudents, fetchTeachers } from '../reducers/student.slice';

export const uploadDocImages = (file) => async (dispatch) => {
  if (!file) {
    return null; 
  }

  const imageName = uuidv4() + '.' + file.name.split('.').pop();
  console.log('Upload Starting...: ', imageName);

  const uploadTask = storage.ref(`student_docs/${imageName}`).put(file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // setProgress(progress);
      },
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        storage
          .ref('student_docs')
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            console.log('Image URL: ', url);
            resolve(url);
          })
          .catch((error) => reject(error));
      }
    );
  });
};

export const createStudent = async (studentData, navigate, setLoading) => {
  try {
    setLoading(true);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    console.log('STUDENT_DATA:::', studentData);

    const studentRef = await db.collection('students').add({
      // registrationId: nanoid(8),
      fname: studentData?.state?.fname,
      lname: studentData?.state?.lname,
      dob: studentData?.state?.dob,
      gender: studentData?.state?.gender,
      studentshipType: studentData?.state?.studentshipType,
      registrationId: studentData?.state?.registrationId,
      class: studentData?.state?.class,
      section: studentData?.state?.section,
      guardianName: studentData?.state?.guardianName,
      bloodGroup: studentData?.state?.bloodGroup,
      religion: studentData?.state?.religion,
      phoneNumber: studentData?.state?.phoneNumber,
      email: studentData?.state?.email,
      skinColor: studentData?.state?.skinColor,
      eyeColor: studentData?.state?.eyeColor,
      height: studentData?.state?.height,
      nationality: studentData?.state?.nationality,
      admissionDate: studentData?.state?.admissionDate,
      admissionTerminated: studentData?.state?.admissionTerminated,
      medicalHistory: studentData?.state?.medicalHistory,
      specialInstruction: studentData?.state?.specialInstruction,
      studentPassportFileUrl: studentData.studentPassportFileUrl,
      anotherFieldFileUrl: studentData.anotherFieldFileUrl,
      mothersIdFileUrl: studentData.mothersIdFileUrl,
      certificateFileUrl: studentData.certificateFileUrl,
      medicalRecordFileUrl: studentData.medicalRecordFileUrl,
      accountCreated: today.toLocaleDateString('en-US', options),
    });

    console.log('RESPONSE ID: ', studentRef.id);

    await db.collection('students').doc(studentRef.id).update({
      studentId: studentRef.id,
    });

    console.log('Created Successfully');
    notifySuccessFxn('Student Profile Created Successfully');
    navigate('/dashboard/home');
    setLoading(true);
  } catch (error) {
    console.log('Error creating student:', error);
    notifyErrorFxn('Error creating student profile');
    setLoading(false);
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    const studentsSnapshot = await db.collection('students').get();

    const students = studentsSnapshot.docs.map((studentDoc) => {
      const studentData = studentDoc.data();
      return { id: studentDoc.id, ...studentData };
    });

    const studentsWithResultsPromises = students.map(async (student) => {
      const resultsSnapshot = await db.collection('result')
        .where('studentId', '==', student.studentId) // Adjust the field name if needed
        .get();

      const results = resultsSnapshot.docs.map((resultDoc) => resultDoc.data());
      return { ...student, results };
    });

    const studentsWithResults = await Promise.all(studentsWithResultsPromises);

    console.log('STUDENTS WITH RESULTS:', studentsWithResults);
    dispatch(fetchStudents(studentsWithResults));
  } catch (error) {
    console.error('Error fetching students and results:', error);
  }
};

export const updateStudent = (studentData, navigate, setLoading) => async (dispatch) => {
  console.log("STIDD____", studentData);

  db.collection('students')
    .doc(studentData.state.studentId)
    .update({
      paymentStatus: studentData.state.paymentStatus ?? 'Not Paid',
      fname: studentData.state.fname,
      lname: studentData.state.lname,
      dob: studentData.state.dob,
      gender: studentData.state.gender,
      studentshipType: studentData.state.studentshipType,
      registrationId: studentData.state.registrationId,
      class: studentData.state.class,
      section: studentData.state.section,
      guardianName: studentData.state.guardianName,
      bloodGroup: studentData.state.bloodGroup,
      religion: studentData.state.religion,
      phoneNumber: studentData.state.phoneNumber,
      email: studentData.state.email,
      skinColor: studentData.state.skinColor,
      eyeColor: studentData.state.eyeColor,
      height: studentData.state.height,
      nationality: studentData.state.nationality,
      admissionDate: studentData.state.admissionDate,
      admissionTerminated: studentData.state.admissionTerminated,
      medicalHistory: studentData.state.medicalHistory,
      specialInstruction: studentData.state.specialInstruction,
      studentPassportFileUrl: studentData.state.studentPassportFile ?? "",
      anotherFieldFileUrl: studentData.state.anotherFieldFile ?? "",
      mothersIdFileUrl: studentData.state.mothersIdFile ?? "",
      certificateFileUrl: studentData.state.certificateFile ?? "",
      medicalRecordFileUrl: studentData.state.medicalRecordFile ?? "",
    })
    .then((res) => {
      setLoading(false);
      notifySuccessFxn('Updated successfully');
      // navigate('/dashboard/home', { replace: true });
    })
    .catch((err) => {
      setLoading(false);
      console.log('ERR-: ', err);
    });
};

export const createTeacher = async (teacherData, navigate, setLoading) => {
  try {
    setLoading(true);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();

    const teacherRef = await db.collection('teachers').add({
      fname: teacherData?.state?.fname,
      lname: teacherData?.state?.lname,
      email: teacherData?.state?.email,
      dob: teacherData?.state?.dob,
      gender: teacherData?.state?.gender,
      studentshipType: teacherData?.state?.studentshipType,
      registrationId: teacherData?.state?.registrationId,
      class: teacherData?.state?.class,
      section: teacherData?.state?.section,
      teacherPassportFileUrl: teacherData.teacherPassportFileUrl,
      accountCreated: today.toLocaleDateString('en-US', options),
    });

    await db.collection('teachers').doc(teacherRef.id).update({
      teacherId: teacherRef.id,
    });

    console.log('Created Successfully');
    notifySuccessFxn('Teacher Profile Created Successfully');
    navigate('/dashboard/home');
    setLoading(true);
  } catch (error) {
    console.log('Error creating student:', error);
    notifyErrorFxn('Error creating student profile');
    setLoading(false);
  }
};

export const getTeachers = () => async (dispatch) => {
  db.collection('teachers')
    .get()
    .then((snapshot) => {
      const teachers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("TEACHERSSS", teachers);
      dispatch(fetchTeachers(teachers));
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log('Error fetching teachers', errorMessage);
    });
};

export const updateTeacher = (teacherData, navigate, setLoading) => async (dispatch) => {
  console.log("TEACHHER_DAYA", teacherData);

  db.collection('teachers')
    .doc(teacherData?.state?.teacherId)
    .update({
      fname: teacherData?.state?.fname,
      lname: teacherData?.state?.lname,
      email: teacherData?.state?.email,
      dob: teacherData?.state?.dob,
      gender: teacherData?.state?.gender,
      studentshipType: teacherData?.state?.studentshipType,
      registrationId: teacherData?.state?.registrationId,
      class: teacherData?.state?.class,
      section: teacherData?.state?.section,
      // teacherPassportFileUrl: teacherData?.teacherPassportFileUrl ? teacherData.teacherPassportFileUrl : '',
    })
    .then((res) => {
      setLoading(false);
      notifySuccessFxn('Updated successfully');
      navigate('/dashboard/home', { replace: true });
    })
    .catch((err) => {
      setLoading(false);
      console.log('ERR-: ', err);
    });
};
