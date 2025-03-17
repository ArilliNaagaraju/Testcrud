import axios from "axios";

const BaseUrl = "http://localhost:5002/api";
const StudentsApi = `${BaseUrl}/students/`;

// Fetch all students
export const getAllStudents = async () => {
    try {
        const response = await axios.get(StudentsApi);
        return response.data;
    } catch (error) {
        console.error("Error fetching all students:", error);
        throw error;
    }
};

// Fetch student by ID
export const getStudentById = async (studentId) => {
    try {
        const response = await axios.get(`${StudentsApi}${studentId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching student data:", error);
        throw error;
    }
};

// Delete student by ID
export const deleteStudentDetails = async (studentId) => {
    try {
        const response = await axios.delete(`${StudentsApi}${studentId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Add new student data
export const postStudentData = async (data) => {
    try {
        const response = await axios.post(StudentsApi, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Update student data (PATCH method)
export const updateStudentDetails = async (studentId, studentData) => {    
    try {
        const response = await axios.put(`${StudentsApi}${studentId}`, studentData);

        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Error handling function
const handleError = (error) => {
    if (error.response) {
        throw new Error(error.response.data.message || "Unknown error occurred.");
    } else if (error.request) {
        throw new Error("No response from server.");
    } else {
        throw new Error("Error while sending request.");
    }
};
