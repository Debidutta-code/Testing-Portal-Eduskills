import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { BsFillInfoCircleFill } from "react-icons/bs";
import styles from './BulkStudentAdd.module.css'; // Import CSS module
// Note: 'styles' is an object containing your CSS class names

const BulkStudentAdd = () => {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [invalidFile, setInvalidFile] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [fileData, setFileData] = useState(null);
    const [displayData, setDisplayData] = useState(null);
    const [headers, setHeaders] = useState([]);

    const keyMappings = {
        'Full Name': 'fullname',
        'College Email Address': 'email',
        'Temporary Password': 'password',
        'Phone Number': 'phoneNumber',
        'Registration Number': 'reg_number',
        'Course': 'course',
        'Stream': 'stream'
    };

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
                console.log('Parsed CSV:', result.data); // Log CSV data to the console
                const parsedData = result.data.map(row => mapKeys(row));
                setDisplayData(result.data);
                setFileData(parsedData);
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
        const parsedData = jsonData.map(row => mapKeys(row));
        setDisplayData(jsonData);
        setFileData(parsedData);
        setHeaders(Object.keys(jsonData[0]));
    };

    const mapKeys = (row) => {
        const mappedRow = {};
        Object.keys(row).forEach((key) => {
            if (keyMappings[key]) {
                mappedRow[keyMappings[key]] = row[key];
            }
        });
        return mappedRow;
    };

    const addStudentList = () => {
        console.log('Adding to student list:', fileData);
        // Perform any other actions you need with fileData here
    };

    return (
        <div className={styles['admin-bulk-student-add']}> {/* Use styles object */}
            <div className={styles['demo']}>
                <p>
                    <a href="/AddStudentFormat.xlsx" download>
                        Download File Format <BsFillInfoCircleFill />
                    </a>
                </p>
            </div>
            <div
                className={`${styles['admin-student-option-input-field-container']} ${isDragActive ? styles['active'] : ''}`}
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
                            <>Drag 'n' drop a CSV or Excel file here, or click to select one</>
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
                    <button className={styles['admin-add-to-student-list-button']} onClick={addStudentList}>
                        Add to Student List
                    </button>
                </div>
            )}
            {displayData && (
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
                            {displayData.map((row, rowIndex) => (
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

export default BulkStudentAdd;
