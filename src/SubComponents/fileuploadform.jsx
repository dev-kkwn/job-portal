import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { FaDownload } from 'react-icons/fa6';

const FileUploadModal = ({ isOpen, onClose, menuType }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const LMS_ROLE = localStorage.getItem("lms_role");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Check if the selected file has a CSV extension
        if (selectedFile && selectedFile.name.endsWith('.csv')) {
            setFile(selectedFile);
            setErrorMessage(''); // Clear any previous error message
        } else {
            setFile(null);
            setErrorMessage('Please select a valid CSV file.');
        }
    };

    // const handleUpload = () => {
    //     if (file) {
    //         const formData = new FormData();
    //         formData.append('uploadFile', file);
    //         axios.post(`${apiUrl}/bulkupload`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         }).then((res) => {
    //             if (res.status === 200) {
    //                 toast.success(res.data.message);
    //             }
    //             onClose();
    //             window.location.reload();

    //         }).catch((err) => {
    //             console.error('Error uploading file:', err);
    //         })

    //     } else {

    //         setErrorMessage('Please select a valid CSV file.');
    //     }
    // };

    //sample csv file download

    // const sampleFileUrl = `${apiUrl}/csvuploads/instituteadmin.csv`;
    // const handleDownloadSampleFile = () => {
    //     const link = document.createElement('a');
    //     link.href = sampleFileUrl;
    //     link.target = '_blank';
    //     link.rel = 'noopener noreferrer';
    //     link.click();
    // };


    const handleUpload = (menuType) => {
        if (!menuType) {
            setErrorMessage('Please provide a valid menu type.');
            return;
        }
    
        if (file) {
            const formData = new FormData();
            formData.append('uploadFile', file);
            
            axios.post(`${apiUrl}/bulkupload/${menuType}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 201) {
                toast.success(res.data.message);
            } else if (res.status === 200) {
                toast.warn(res.data.message);  
            }  
                onClose();
                //window.location.reload();
            }).catch((err) => {
                console.error('Error uploading file:', err);
            });
        } else {
            
            setErrorMessage('Please select a valid CSV file.');
        }
    };

    const handleDownloadSampleFile = () => {
        let sampleFileUrl;

        switch (menuType) {
            case "institute":
                sampleFileUrl = `${apiUrl}/csvuploads/institute.csv`;
                break;
            case "instituteadmin":
                sampleFileUrl = `${apiUrl}/csvuploads/instituteadmin.csv`;
                break;
            case "branch":
                sampleFileUrl = `${apiUrl}/csvuploads/branch.csv`;
                break;
            case "branchadmin":
                sampleFileUrl = `${apiUrl}/csvuploads/branchadmin.csv`;
                break;
            case "faculty":
                sampleFileUrl = `${apiUrl}/csvuploads/faculty.csv`;
                break;
            case "courses":
                sampleFileUrl = `${apiUrl}/csvuploads/courses.csv`;
                break;
            case "section":
                sampleFileUrl = `${apiUrl}/csvuploads/section.csv`;
                break;
            case "subject":
                sampleFileUrl = `${apiUrl}/csvuploads/subject.csv`;
                 break;
            case "student":
                sampleFileUrl = `${apiUrl}/csvuploads/student.csv`;
                break;

            default:
                sampleFileUrl = `${apiUrl}/csvuploads/defaultsample.csv`;
        }

        const link = document.createElement("a");
        link.href = sampleFileUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.click();
    };
    return (
        <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="bg-white px-6 py-4 rounded-lg">
                    <div className="w-full flex flex-row justify-between items-start mb-2">
                    <h2 className="text-xl font-medium mb-4 ">Upload CSV File</h2>
                        <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={onClose}
                            aria-label="Close Modal"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    
                    <input type="file" accept=".csv" onChange={handleFileChange} 
                    className="relative m-0 block w-full min-w-0 flex-auto h-[44px] pl-4 cursor-pointer rounded border-[1.5px] border-solid border-gray-300 bg-white text-base font-normal text-gray-400 outline-none transition duration-300 ease-in-out file:-mx-4 file:-my-1 file:cursor-pointer file:rounded-none file:border-0 file:border-solid file:bg-gray file:px-3 file:py-3 file:font-medium file:text-gray-600 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] focus:border-success focus:bg-white focus:text-gray-400 focus:shadow-success focus:outline-none "
 />
                    {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
                    <div className='flex flex-row items-center gap-2 '>
                        <FaDownload className='text-primary'/>
                    <p className='flex cursor-pointer underline mt-4 mb-4' onClick={handleDownloadSampleFile}>Download Sample File</p>
                    </div>
                    <button
                        className="flex flex-row py-3 px-4 text-[14px] bg-primary text-white rounded-lg hover:bg-secondary  hover:text-green items-center gap-1 "
                        onClick={() => handleUpload(menuType)}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FileUploadModal;
