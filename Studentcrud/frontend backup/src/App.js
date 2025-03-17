import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SendData from './Pages/SendData';
import GetAllStudents from './Pages/GetAllStudents';
import PutStudentData from './Pages/PutStudentData';
import DeleteStudent from './Pages/DeleteStudent';
import UpdateStudentData from './Pages/UpdateStudentData';
import GetStudentId from './Pages/GetStudentId';
import NavigationButtons from './ReuseComponents/NavigationButtons';
import './App.css';

function App() {
    return (
        <Router>
            <NavigationButtons />
            <Routes>
                {/* <Route path="/" element={<h3>Welcome! Click a button to proceed.</h3>} /> */}
                <Route path="/updateStudentData" element={<UpdateStudentData />} />
                <Route path="/sendData" element={<SendData />} />
                <Route path="/getAllStudents" element={<GetAllStudents />} />
                <Route path="/putStudentData/:id" element={<PutStudentData />} />  {/* ✅ FIXED */}
                <Route path="/deleteStudent" element={<DeleteStudent />} />
                <Route path="/getStudentId" element={<GetStudentId />} />
            </Routes>
        </Router>
    );
}

export default App;
