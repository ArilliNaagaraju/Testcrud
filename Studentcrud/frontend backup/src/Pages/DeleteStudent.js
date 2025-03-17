import React, { useState, useEffect } from 'react';
import { deleteStudentDetails, getAllStudents } from '../AllServices/Service';
import { useNavigate } from "react-router-dom";
function DeleteStudent() {

    const navigate = useNavigate();
    const [deleteStudentId, setDeleteStudentId] = useState('');
    const [message, setMessage] = useState('');
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const data = await getAllStudents();
            setStudentData(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!deleteStudentId) { 
            alert("Student ID is required for deleting data.");
            return;
        }
        const studentExists = studentData.some(student => String(student.StudentId) === String(deleteStudentId));

        if (!studentExists) {
            setMessage(" Student ID not found.");
            return;
        }
        try {
            const response = await deleteStudentDetails(deleteStudentId);
            setMessage("Student deleted successfully!");
            setDeleteStudentId('');
            fetchStudents(); 
            navigate("/getAllStudents");
        } catch (error) {
            setMessage("Error deleting student data.");
        }
    };

    return (
        <>
            <form onSubmit={handleDelete}>
                <label>Delete Student Data</label>
                <input 
                    type="text" 
                    placeholder="Enter Student ID" 
                    value={deleteStudentId} 
                    onChange={(e) => setDeleteStudentId(e.target.value)} 
                />
                <button type="submit" style={{ marginRight: "80px" }}>Delete</button>
            </form>
            <h3 style={{ textAlign: "center", marginTop: "10px", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
    {message && <p>{message}</p>}
</h3>
 
        </>
    );
}

export default DeleteStudent;
