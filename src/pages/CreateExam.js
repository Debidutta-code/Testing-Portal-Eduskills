import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateExam.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrSchedule } from "react-icons/gr";
import Navbar from '../components/Navbar';

const CreateExam = () => {
    const navigate = useNavigate();
    const [numCategories, setNumCategories] = useState(1);
    const [showNegativeMarking, setShowNegativeMarking] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedHour, setSelectedHour] = useState('12');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedPeriod, setSelectedPeriod] = useState('AM');

    const demoCategories = ["Mathematics", "Aptitude", "Reasoning", "Coding", "Oops", "DBMS"];

    const handleCreateExamBackBtnClicked = () => {
        navigate('/admin');
    };

    const handleNumCategoriesChange = (e) => {
        const count = parseInt(e.target.value);
        setNumCategories(count);
        setCategories(Array.from({ length: count }, (_, index) => demoCategories[index % demoCategories.length]));
    };

    const handleCategoryChange = (index, e) => {
        const updatedCategories = [...categories];
        updatedCategories[index] = e.target.value;
        setCategories(updatedCategories);
    };

    const handleNegativeMarkingChange = (e) => {
        setShowNegativeMarking(e.target.checked);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    const handleTimeChange = (type, value) => {
        if (type === 'hour') {
            setSelectedHour(value);
        } else if (type === 'minute') {
            setSelectedMinute(value);
        } else if (type === 'period') {
            setSelectedPeriod(value);
        }
    };

    return (
        <>
            <Navbar />
            <div className="admin-create-exam-main-component">
            <div className='admin-create-exam-page-btn-form-container'>
                <div className="admin-create-exam-back-button-container">
                    <button className="admin-create-exam-back-button" onClick={handleCreateExamBackBtnClicked}>
                        <FaLongArrowAltLeft />
                    </button>
                </div>
                <div className='admin-create-exam-main-form-container'>
                    <div className="admin-create-exam-left-section">
                        <div className="admin-create-exam-form-section">
                            <label htmlFor="numCategories">No of Category:</label>
                            <select id="numCategories" value={numCategories} onChange={handleNumCategoriesChange}>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                        <div className="admin-create-exam-form-section">
                            <label htmlFor="testDuration">Test Duration (minutes):</label>
                            <input type="number" id="testDuration" />
                        </div>
                        <div className="admin-create-exam-form-section">
                            <h3 className='admin-create-exam-additional-options'>Additional Options:</h3>
                            <div className='admin-create-exam-checkbox-align'>
                                <p className='admin-create-exam-label-require'>Enable Camera</p>
                                <input type="checkbox" id="cameraAuthentication" className='admin-create-exam-checkbox-input-box' />
                            </div>
                            <div className='admin-create-exam-checkbox-align'>
                                <p className='admin-create-exam-label-require'>Require ID Card Authentication</p>
                                <input type="checkbox" id="idCardAuthentication" />
                            </div>
                            <div className='admin-create-exam-checkbox-align'>
                                <p className='admin-create-exam-label-require'>Location Access</p>
                                <input type="checkbox" id="locationAccess" />
                            </div>
                            <div className='admin-create-exam-checkbox-align'>
                                <p className='admin-create-exam-label-require'>Mic Access</p>
                                <input type="checkbox" id="micAccess" />
                            </div>
                            <div className='admin-create-exam-checkbox-align'>
                                <p className='admin-create-exam-label-require admin-create-exam-neg-label'>Shuffle Question</p>
                                <input type="checkbox" id="shuffleQuestion" />
                            </div>
                            <div className='admin-create-exam-checkbox-align'>
                                <p className='admin-create-exam-label-require admin-create-exam-neg-label'>Negative Marking</p>
                                <input type="checkbox" id="negativeMarking" className='admin-create-exam-neg-input' onChange={handleNegativeMarkingChange} />
                            </div>
                            {showNegativeMarking && (
                                <div className="admin-create-exam-form-section">
                                    <label htmlFor="negativeMark">Negative Mark:</label>
                                    <input type="number" step="0.01" id="negativeMark" placeholder="Enter negative mark value" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="admin-create-exam-right-section">
                        <div className="admin-create-exam-category-container">
                            {[...Array(numCategories)].map((_, index) => (
                                <div key={index} className="admin-create-exam-category-section">
                                    <h3 className='admin-create-exam-category-count'>Category {index + 1}</h3>
                                    <div className="admin-create-exam-form-section">
                                        <label htmlFor={`category${index}-chooseCategory`}>Choose Category:</label>
                                        <select
                                            id={`category${index}-chooseCategory`}
                                            value={categories[index]}
                                            onChange={(e) => handleCategoryChange(index, e)}
                                        >
                                            {demoCategories.map((category, idx) => (
                                                <option key={idx} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="admin-create-exam-form-section">
                                        <label htmlFor={`category${index}-questions`}>No of questions:</label>
                                        <input type="number" id={`category${index}-questions`} />
                                    </div>
                                    <div className="admin-create-exam-form-section">
                                        <label htmlFor={`category${index}-totalMark`}>Total Mark:</label>
                                        <input type="number" id={`category${index}-totalMark`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="admin-create-exam-date-time-section">
                            <h3 className='admin-create-exam-additional-options'>Exam Date & Time:</h3>
                            <div className='admin-create-exam-date-time-picker'>
                                <span className='choose-date-heading'>Choose Date :</span>
                                <button className="admin-create-exam-choose-date-button" onClick={() => setShowDatePicker(true)}> <GrSchedule /></button>
                                {showDatePicker && (
                                    <div className="admin-create-exam-date-picker-popup">
                                        <Calendar className="admin-create-exam-calender-btn" onChange={handleDateChange} value={selectedDate} />
                                        <button className='close-btn-calender' onClick={() => setShowDatePicker(false)}>Close</button>
                                    </div>
                                )}
                                <br />
                                <br />
                                <label>Choose Time:</label>
                                <div className="admin-create-exam-time-picker">
                                    <select value={selectedHour} onChange={(e) => handleTimeChange('hour', e.target.value)}>
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
                                        ))}
                                    </select>
                                    <select value={selectedMinute} onChange={(e) => handleTimeChange('minute', e.target.value)}>
                                        {[...Array(60)].map((_, i) => (
                                            <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
                                        ))}
                                    </select>
                                    <select value={selectedPeriod} onChange={(e) => handleTimeChange('period', e.target.value)}>
                                        {['AM', 'PM'].map((period, i) => (
                                            <option key={i} value={period}>{period}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="admin-create-exam-action-buttons">
                                <button className="admin-create-exam-create-exam-button">Create Exam</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CreateExam;
