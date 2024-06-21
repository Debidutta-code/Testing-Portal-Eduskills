import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllCategory.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import AllCategoryComp from '../components/AllCategoryComp';

const AllCategory = () => {
    const [selectedOption, setSelectedOption] = useState('all-category');
    const navigate = useNavigate();

    const handleAllCategoryBackBtnClicked = () => {
        navigate('/admin');
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            <Navbar />
            <div className="admin-all-category-main-component">
                <div className='admin-all-category-page-btn-form-container'>
                    <div className="admin-all-category-back-button-container">
                        <button className="admin-all-category-back-button" onClick={handleAllCategoryBackBtnClicked}>
                            <FaLongArrowAltLeft />
                        </button>
                    </div>
                    {/* Sidebar */}
                    <div className="admin-all-category-sidebar">
                        <div 
                            className={`admin-all-category-sidebar-option ${selectedOption === 'all-category' ? 'selected' : ''}`} 
                            onClick={() => handleOptionClick('all-category')}
                        >
                            All Category
                        </div>
                        <div 
                            className={`admin-all-category-sidebar-option ${selectedOption === 'create-category' ? 'selected' : ''}`} 
                            onClick={() => handleOptionClick('create-category')}
                        >
                            Create Category
                        </div>
                        <div 
                            className={`admin-all-category-sidebar-option ${selectedOption === 'edit-category' ? 'selected' : ''}`} 
                            onClick={() => handleOptionClick('edit-category')}
                        >
                            Edit Category
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className='admin-all-category-main-form-container'>
                        <div className="admin-all-category-content">
                            {selectedOption === 'all-category' && <AllCategoryComp />}
                            {selectedOption === 'create-category' && <div>Create Category Content</div>}
                            {selectedOption === 'edit-category' && <div>Edit Category Content</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCategory;
