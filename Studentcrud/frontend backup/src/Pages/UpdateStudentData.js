


import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../AllServices/Service';
import { useNavigate } from 'react-router-dom';

function UpdateStudentData() {
    const [getStudentData, setStudentData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllStudents();
    }, []);

    const fetchAllStudents = async () => {
        try {
            const data = await getAllStudents();
            setStudentData(data);
        } catch (error) {
            console.log("Error fetching student data:", error);
        }
    };

    return (
        <>
            <h1 style={{ marginTop: '20px' }}>This is Students Data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>StudentId</th>
                        <th>StudentName</th>
                        <th>StudentAge</th>
                        <th>StudentDepartment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getStudentData.map((student, index) => (
                        <tr key={index}>
                            <td>{student.StudentId || 'N/A'}</td>
                            <td>{student.StudentName || 'N/A'}</td>
                            <td>{student.StudentAge || 'N/A'}</td>
                            <td>{student.StudentDeprtment || 'N/A'}</td>
                            <td>
                            <button onClick={() => navigate(`/putStudentData/${student.StudentId}`, { state: { student } })}>
    Edit
</button>


                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </>
    );
}

export default UpdateStudentData;
