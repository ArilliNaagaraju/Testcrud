const db = require("../db");

const Student = {
    getAll: (callback) => {
        db.query("SELECT * FROM student", callback);
    },
    getById: (id, callback) => {
        db.query("SELECT * FROM student WHERE StudentId = ?", [id], callback);
    },
    create: (data, callback) => {
        db.query(
            "INSERT INTO student (StudentId, StudentName, StudentAge, StudentDeprtment) VALUES (?, ?, ?, ?)",
            [data.StudentId, data.StudentName, data.StudentAge, data.StudentDeprtment],
            callback
        );
    },
    update: (id, data, callback) => {
        db.query(
            "UPDATE student SET StudentName = ?, StudentAge = ?, StudentDeprtment = ? WHERE StudentId = ?",
            [data.StudentName, data.StudentAge, data.StudentDeprtment, id],
            callback
        );
    },
    delete: (id, callback) => {
        db.query("DELETE FROM student WHERE StudentId = ?", [id], callback);
    },
};

module.exports = Student;
