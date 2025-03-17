import React, { useState } from "react";
import { postStudentData } from "../AllServices/Service";
import { useNavigate } from "react-router-dom";

function SendData() {
    const navigate = useNavigate();

    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const [studentDepartment, setStudentDepartment] = useState("");

    const datasubmit = async (e) => {
        e.preventDefault();
        const data = {
            StudentId: studentId,
            StudentName: studentName,
            StudentAge: studentAge,
            StudentDeprtment: studentDepartment 
        };

        try {
            const response = await postStudentData(data);
            console.log("Student data posted:", response);
            navigate("/getAllStudents");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <form onSubmit={datasubmit}>
                <label>Send Student Data</label>
                <input type="text" placeholder="StudentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                <input type="text" placeholder="StudentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                <input type="number" placeholder="StudentAge" value={studentAge} onChange={(e) => setStudentAge(e.target.value)} />
                <input type="text" placeholder="StudentDepartment" value={studentDepartment} onChange={(e) => setStudentDepartment(e.target.value)} />
                <button type="submit" style={{ marginRight: "80px" }}>Submit</button>
            </form>
        </>
    );
}

export default SendData;
