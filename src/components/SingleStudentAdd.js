import React, { useState } from 'react';
import './SingleStudentAdd.css';

const SingleStudentAdd = () => {
    const [studentName, setStudentName] = useState('');
    const [studentPhone, setStudentPhone] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setStudentPassword] = useState('');
    const [studentRegNo, setStudentRegNo] = useState('');
    const [studentBranch, setStudentBranch] = useState('');
    const [studentStream, setStudentStream] = useState('');

    const handleAddStudent = () => {
        // Handle the logic for adding a student
        console.log('Student Added:', {
            studentName,
            studentPhone,
            studentEmail,
            studentPassword,
            studentRegNo,
            studentBranch,
            studentStream
        });
    };

    return (
        <div className="admin-single-student-add-main-component">
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Name *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter student name..."
                    />
                </div>
            </div>
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Phone No *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="text"
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        placeholder="Enter student phone number..."
                    />
                </div>
            </div>
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Email *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="email"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        placeholder="Enter student email..."
                    />
                </div>
            </div>
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Password *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="password"
                        value={studentPassword}
                        onChange={(e) => setStudentPassword(e.target.value)}
                        placeholder="Enter student password..."
                    />
                </div>
            </div>
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Registration No *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="text"
                        value={studentRegNo}
                        onChange={(e) => setStudentRegNo(e.target.value)}
                        placeholder="Enter student registration number..."
                    />
                </div>
            </div>
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Branch *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="text"
                        value={studentBranch}
                        onChange={(e) => setStudentBranch(e.target.value)}
                        placeholder="Enter student branch..."
                    />
                </div>
            </div>
            <div className="admin-student-field">
                <div className="admin-upload-student">Student Stream *</div>
                <div className="admin-student-type-input-field">
                    <input
                        type="text"
                        value={studentStream}
                        onChange={(e) => setStudentStream(e.target.value)}
                        placeholder="Enter student stream..."
                    />
                </div>
            </div>
            <div className="admin-add-student-btn-container">
                <div className="admin-save-student-btn" onClick={handleAddStudent}>
                    Add Student
                </div>
            </div>
        </div>
    );
};

export default SingleStudentAdd;
