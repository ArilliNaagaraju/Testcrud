// import React, { useState, useEffect } from 'react';
// import { updateStudentDetails, getAllStudents } from '../AllServices/Service';

// function PutStudentData() {
//     const [putStudentId, setPutStudentId] = useState('');
//     const [putStudentName, setPutStudentName] = useState('');
//     const [putStudentAge, setPutStudentAge] = useState('');
//     const [putStudentDepartment, setPutStudentDepartment] = useState('');
//     const [allStudents, setAllStudents] = useState([]);

//     useEffect(() => {
//         fetchAllStudents();
//     }, []);

//     const fetchAllStudents = async () => {
//         try {
//             const data = await getAllStudents();
//             setAllStudents(data);
//         } catch (error) {
//             console.error("Error fetching student data:", error);
//         }
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();

//         if (!putStudentId) {
//             alert("Student ID is required for updating data.");
//             return;
//         }

//         const data = {
//             StudentName: putStudentName || allStudents.find(student => student.id === putStudentId)?.StudentName,
//             StudentAge: putStudentAge || allStudents.find(student => student.id === putStudentId)?.StudentAge,
//             StudentDeprtment: putStudentDepartment || allStudents.find(student => student.id === putStudentId)?.StudentDepartment
//         };

//         try {
//             const response = await updateStudentDetails(putStudentId, data);
//             console.log("Updated successfully:", response);
//             fetchAllStudents();
//             setPutStudentId('');
//             setPutStudentName('');
//             setPutStudentAge('');
//             setPutStudentDepartment('');
//         } catch (error) {
//             console.error("Error updating data:", error);
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleUpdate}>
//                 <label>UPDATE</label>
//                 <input type="text" placeholder="Student ID" value={putStudentId} onChange={(e) => setPutStudentId(e.target.value)} />
//                 <input type="text" placeholder="Student Name" value={putStudentName} onChange={(e) => setPutStudentName(e.target.value)} />
//                 <input type="number" placeholder="Student Age" value={putStudentAge} onChange={(e) => setPutStudentAge(e.target.value)} />
//                 <input type="text" placeholder="Student Department" value={putStudentDepartment} onChange={(e) => setPutStudentDepartment(e.target.value)} />
//                 <button type="submit">Update Student</button>
//             </form>
//         </>
//     );
// }

// export default PutStudentData;




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
