import React, { useState } from 'react';
import { getStudentById } from '../AllServices/Service';

function GetStudentId() {
    const [studentId, setStudentId] = useState('');
    const [studentData, setStudentData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!studentId) {
            alert("Please enter a Student ID.");
            return;
        }

        try {
            const data = await getStudentById(studentId);
            setStudentData(data);
        } catch (error) {
            console.error("Error fetching student data:", error);
            setStudentData(null);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>Student Details</label>
                <input 
                    type="text" 
                    placeholder="Enter Student ID" 
                    value={studentId} 
                    onChange={(e) => setStudentId(e.target.value)} 
                />
                <button type="submit" style={{ marginRight: "80px" }}>Submit</button>
            </form>

            {studentData && (
                <div className='Studentid'>
                    <label>Student Details:</label>
                    <p><strong>ID:</strong> {studentData.StudentId || 'N/A'}</p>
                    <p><strong>Name:</strong> {studentData.StudentName || 'N/A'}</p>
                    <p><strong>Age:</strong> {studentData.StudentAge || 'N/A'}</p>
                    <p><strong>Department:</strong> {studentData.StudentDepartment || 'N/A'}</p>
                </div>
            )}
        </>
    );
}

export default GetStudentId;
