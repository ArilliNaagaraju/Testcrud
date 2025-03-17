
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationButtons() {
    const location = useLocation();

    // Hide buttons when inside any component (except home)
    const isComponentActive =
        location.pathname !== '/' &&
        location.pathname !== '/home';

    return (
        !isComponentActive && (
            <div className="button-container">
                <Link to="/updateStudentData">
                    <button>Update Student</button>
                </Link>
                <Link to="/sendData">
                    <button>Send Data</button>
                </Link>
                <Link to="/getAllStudents">
                    <button>Get All Students</button>
                </Link>
                {/* <Link to="/PutStudentData">
                    <button>Edit Student</button>
                </Link> */}
                <Link to="/deleteStudent">
                    <button>Delete Student</button>
                </Link>
                <Link to="/getStudentId">
                    <button>Get Student By ID</button>
                </Link>
            </div>
        )
    );
}

export default NavigationButtons;
