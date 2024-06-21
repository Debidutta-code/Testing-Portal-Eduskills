import React, { useState } from 'react';
import './SingleQuestionUpload.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { RiDeleteBin5Line } from "react-icons/ri";

const SingleQuestionUpload = () => {
    const questionTypes = ['Multiple Choice', 'Single Choice', 'Fill in the Blanks', 'True False'];
    const categoryTypes = ['Math', 'Aptitude', 'Coding', 'Verbal', 'English'];

    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [options, setOptions] = useState([
        { id: 1, text: '' },
        { id: 2, text: '' }
    ]);

    const handleAddOption = () => {
        const newOption = { id: options.length + 1, text: '' };
        setOptions([...options, newOption]);
    };

    const handleDeleteOption = (id) => {
        setOptions(options.filter(option => option.id !== id));
    };

    const handleTypeChange = (e) => {
        const type = e.target.value;
        setSelectedType(type);
        // Clear options when switching to "Fill in the Blanks"
        if (type === 'Fill in the Blanks') {
            setOptions([]);
        } else {
            // Reset options if switching away from "Fill in the Blanks"
            setOptions([
                { id: 1, text: '' },
                { id: 2, text: '' }
            ]);
        }
    };

    const handleCategoryChange = (e) => {
        const type = e.target.value;
        setSelectedCategory(type);
    }

    return (
        <div className="admin-single-question-upload">
            <div className="admin-question-type-and-marks">
                <div className="admin-upload-question">Question Type *</div>
                <div className="admin-choose-type-and-mark">
                    <div className='admin-choose-question-type'>
                        <select className='admin-dropdown' value={selectedType} onChange={handleTypeChange}>
                            <option value='' disabled>Select Question Type * </option>
                            {questionTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='admin-category-choose-dropdown'>
                        <div className='admin-choose-question-mark-label'>Category*</div>
                        <select className='admin-dropdown' value={selectedCategory} onChange={handleCategoryChange}>
                            <option value='' disabled>Select Category Type * </option>
                            {categoryTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='admin-choose-question-mark'>
                        <div className='admin-choose-question-mark-label'>Mark *</div>
                        <div className='admin-choose-question-mark-input-field'>
                            <input type='number' placeholder='Mark * ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='admin-question-field'>
                <div className='admin-upload-question'>Question * </div>
                <div className='admin-question-type-input-field'>
                    <ReactQuill
                        className='admin-question-quill-editor'
                        modules={quillModules}
                        formats={quillFormats}
                        placeholder='Enter your question...'
                    />
                </div>
            </div>

            {selectedType === 'Fill in the Blanks' ? (
                <div className='admin-answer-field'>
                    <div className='admin-upload-question'>Answer *</div>
                    <div className='admin-question-type-input-field'>
                        <input className='admin-ans-input' type='text' placeholder='Enter the answer...' />
                    </div>
                </div>
            ) : (
                <div className='admin-options-field'>
                    {options.map((option, index) => (
                        <div key={option.id} className='admin-option-container'>
                            <div className='admin-upload-question'>Option {index + 1} -  </div>
                            <div className='admin-option-input-field'>
                                <input type='text' placeholder={`Option ${index + 1}`} className='option-input-field' />
                                <div className='admin-correctoption-checkbox-and-lebel'>
                                    <input type='checkbox'></input>
                                    <p>Correct</p>
                                </div>
                                <div className='admin-delete-option-btn-container' onClick={() => handleDeleteOption(option.id)}>
                                    <RiDeleteBin5Line />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='add-option-button-with-btn'>
                        <div className='empty-div'></div>
                        <div className='add-optn-btn-container'>
                            <button className="admin-add-option-button" onClick={handleAddOption}>
                                Add Option
                            </button>
                            <div className='admin-save-question-btn'>Save Question</div>
                        </div>
                    </div>
                </div>
            )}

            {selectedType === 'Fill in the Blanks' && (
                <div className='submit-btn-fill-in-blank-container-and-empty-div'>
                    <div className='empty-div'></div>
                    <div className='submit-btn-fill-in-blank'>Add Question</div>
                </div>
            )}
        </div>
    );
};

export default SingleQuestionUpload;

const quillModules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
};

const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];
