import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddQuestion.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import SingleQuestionUpload from '../components/SingleQuestionUpload';
import QuestionBankUpload from '../components/QuestionBankUpload';
import Navbar from '../components/Navbar';


const AddQuestions = () => {
    const navigate = useNavigate();
    const [uploadType, setUploadType] = useState('single'); // Set default to 'single'

    const handleAddQuestionsBackBtnClicked = () => {
        navigate('/admin');
    };

    const handleSingleUploadClick = () => {
        setUploadType('single');
    };

    const handleBulkUploadClick = () => {
        setUploadType('bulk');
    };

    return (
        <>
            <Navbar />
            <div className="admin-add-questions-main-component">
                <div className='admin-add-questions-page-btn-form-container'>
                    <div className="admin-add-questions-back-button-container">
                        <button className="admin-add-questions-back-button" onClick={handleAddQuestionsBackBtnClicked}>
                            <FaLongArrowAltLeft />
                        </button>
                    </div>
                    <div className='admin-add-questions-main-form-container'>
                        <div className="admin-add-questions-content">
                            <div className='admin-single-multiple-upload-option-heading'>
                                <div className='admin-single-multiple-upload-option-container'>
                                    <div
                                        className={`single-multi-btn ${uploadType === 'single' ? 'selected' : ''}`}
                                        onClick={handleSingleUploadClick}
                                    >
                                        Single Upload
                                    </div>
                                    <div
                                        className={`single-multi-btn ${uploadType === 'bulk' ? 'selected' : ''}`}
                                        onClick={handleBulkUploadClick}
                                    >
                                        Bulk Upload
                                    </div>
                                </div>
                            </div>
                            <div className='upload-component-container'>
                                {uploadType === 'single' && <SingleQuestionUpload />}
                                {uploadType === 'bulk' && <QuestionBankUpload />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddQuestions;
