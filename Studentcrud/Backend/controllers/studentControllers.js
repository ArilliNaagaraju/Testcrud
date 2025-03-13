const Student = require("../models/studentModel");

exports.getStudents = (req, res) => {
    Student.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getStudentById = (req, res) => {
    const { id } = req.params;
    Student.getById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: "Student not found" });
        res.json(result[0]);
    });
};

exports.createStudent = (req, res) => {
    Student.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Student Created!" });
    });
};

exports.updateStudent = (req, res) => {
    const { id } = req.params;
    Student.update(id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Student Updated!" });
    });
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    Student.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Student Deleted!" });
    });
};
