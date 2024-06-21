import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import SingleStudentAdd from '../components/SingleStudentAdd';
import BulkStudentAdd from '../components/BulkStudentAdd';
import './AddStudents.css';

const AddStudents = () => {
    const navigate = useNavigate();
    const [addType, setAddType] = useState('single'); // Set default to 'single'

    const handleAddStudentsBackBtnClicked = () => {
        navigate('/admin');
    };

    const handleSingleAddClick = () => {
        setAddType('single');
    };

    const handleBulkAddClick = () => {
        setAddType('bulk');
    };

    return (
        <>
            <Navbar />
            <div className="admin-add-students-main-component">
                <div className='admin-add-students-page-btn-form-container'>
                    <div className="admin-add-students-back-button-container">
                        <button className="admin-add-students-back-button" onClick={handleAddStudentsBackBtnClicked}>
                            <FaLongArrowAltLeft />
                        </button>
                    </div>
                    <div className='admin-add-students-main-form-container'>
                        <div className="admin-add-students-content">
                            <div className='admin-single-multiple-add-option-heading'>
                                <div className='admin-single-multiple-add-option-container'>
                                    <div
                                        className={`single-multi-btn ${addType === 'single' ? 'selected' : ''}`}
                                        onClick={handleSingleAddClick}
                                    >
                                        Single Add
                                    </div>
                                    <div
                                        className={`single-multi-btn ${addType === 'bulk' ? 'selected' : ''}`}
                                        onClick={handleBulkAddClick}
                                    >
                                        Bulk Add
                                    </div>
                                </div>
                            </div>
                            <div className='add-component-container'>
                                {addType === 'single' && <SingleStudentAdd />}
                                {addType === 'bulk' && <BulkStudentAdd />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddStudents;
