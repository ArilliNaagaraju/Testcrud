import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateStudentDetails } from '../AllServices/Service';

function PutStudentData() {
    const location = useLocation();
    const navigate = useNavigate();
    const student = location.state?.student; // Get student data

    // Initialize form data
    const [formData, setFormData] = useState({
        StudentId: student?.StudentId || '',
        StudentName: student?.StudentName || '',
        StudentAge: student?.StudentAge || '',
        StudentDepartment: student?.StudentDepartment || ''
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();


        const updatedData = {
            StudentId: formData.StudentId, 
            StudentName: formData.StudentName || student.StudentName,
            StudentAge: formData.StudentAge || student.StudentAge,
            StudentDeprtment: formData.StudentDepartment || student.StudentDeprtment
        };

        try {
            await updateStudentDetails(updatedData.StudentId, updatedData);
            alert('Student data updated successfully!');
            navigate("/getAllStudents");// Redirect after update
        } catch (error) {
            console.error("Error updating student data:", error);
        }
    };

    return (
        <div>
            <h3 style={{ textAlign: "center", marginTop: "20px", fontSize: "18px", fontWeight: "bold", color: "#333" }}>Edit Student Data</h3>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="StudentId" value={formData.StudentId} />
                <label>Student Name:</label>
                <input
                    type="text"
                    name="StudentName"
                    value={formData.StudentName}
                    onChange={handleChange}
                />

                <label>Student Age:</label>
                <input
                    type="number"
                    name="StudentAge"
                    value={formData.StudentAge}
                    onChange={handleChange}
                />

                <label>Student Department:</label>
                <input
                    type="text"
                    name="StudentDepartment"
                    value={formData.StudentDepartment}
                    onChange={handleChange}
                />

<button type="submit" style={{ marginRight: "80px" }}>Update</button>

            </form>
        </div>
    );
}

export default PutStudentData;
