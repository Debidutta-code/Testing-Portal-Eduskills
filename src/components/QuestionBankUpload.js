import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { BsFillInfoCircleFill } from "react-icons/bs";
import styles from './QuestionBankUpload.module.css'; // Import CSS Module

const QuestionBankUpload = () => {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [category, setCategory] = useState('');
    const [invalidFile, setInvalidFile] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [fileData, setFileData] = useState(null);
    const [headers, setHeaders] = useState([]);

    const categories = ['Math', 'Coding', 'Aptitude', 'Verbal'];

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'text/csv': ['.csv'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        },
        onDrop: (acceptedFiles, fileRejections) => {
            if (fileRejections.length > 0) {
                setInvalidFile(true);
                setFileUploaded(false);
                setUploadedFileName('');
            } else {
                const uploadedFile = acceptedFiles[0];
                setUploadedFileName(uploadedFile.name);
                setFileUploaded(true);
                setInvalidFile(false);
                readFile(uploadedFile);
            }
        }
    });

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target.result;
            if (file.type === 'text/csv') {
                parseCSV(data);
            } else if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                parseXLSX(data);
            }
        };
        if (file.type === 'text/csv') {
            reader.readAsText(file);
        } else {
            reader.readAsBinaryString(file);
        }
    };

    const parseCSV = (data) => {
        Papa.parse(data, {
            header: true,
            complete: (result) => {
                console.log(result.data); // Log CSV data to the console
                setFileData(result.data);
                setHeaders(Object.keys(result.data[0]));
            },
            error: (error) => {
                console.error('Error parsing CSV:', error);
            }
        });
    };

    const parseXLSX = (data) => {
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log(jsonData); // Log XLSX data to the console
        setFileData(jsonData);
        setHeaders(Object.keys(jsonData[0]));
    };

    return (
        <div className={styles['admin-question-bank-upload']}>
            <div className={styles['demo']}>
                <p>
                    <a href="/AddQuestionFormat.xlsx" download className={styles['download-link']}>
                        Download File Format <BsFillInfoCircleFill />
                    </a>
                </p>
            </div>
            <div className={styles['category-selector']}>
                <select id="category" value={category} onChange={handleCategoryChange}>
                    <option value="" disabled>Select Category of Question Bank</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            
            <div
                className={`${styles['admin-question-option-input-field-container']} ${isDragActive ? styles.active : ''}`}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here...</p>
                ) : (
                    <p>
                        {uploadedFileName ? (
                            <div className={styles['uploaded-file-name']}>Uploaded file: {uploadedFileName}</div>
                        ) : (
                            <>
                                Drag 'n' drop a CSV or Excel file here, or click to select one

                            </>
                        )}
                    </p>
                )}
            </div>
            {invalidFile && (
                <div className={styles['upload-error-message']}>
                    <p>Invalid file type. Please upload a CSV or Excel file.</p>
                </div>
            )}
            {fileUploaded && (
                <div className={styles['upload-success-message']}>
                    <p>File Uploaded Successfully!</p>
                    <button className={styles['admin-add-to-question-bank-button']}>
                        Add to Question Bank
                    </button>
                </div>
            )}
            {fileData && (
                <div className={styles['file-data-table-container']}>
                    <table className={styles['file-data-table']}>
                        <thead>
                            <tr>
                                {headers.map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {fileData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {headers.map((header) => (
                                        <td key={header}>{row[header]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default QuestionBankUpload;
