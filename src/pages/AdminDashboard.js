import React from "react";
import './AdminDashboard.css';
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleCreateExamClicked = () => {
        navigate("/create-exam");
    }

    const handleAddQuestionsClicked = () => {
        navigate('/add-questions');
    }

    const handleAddStudentsClicked = () => {
        navigate('/add-students');
    }

    const handleAllCategoryClicked = () => {
        navigate('/categories');
    }

    return (
        <div className="admin-dashboard-main-component">
            <div className="cards-container">
                <div className="card" onClick={handleAllCategoryClicked}> <h2 className="card-heading">All Category</h2> </div>
                <div className="card" onClick={handleAddQuestionsClicked}><h2 className="card-heading">Add Question Bank</h2></div>
                <div className="card" onClick={handleCreateExamClicked}><h2 className="card-heading">Create Exam</h2></div>
                <div className="card" onClick={handleAddStudentsClicked}><h2 className="card-heading">Add Students</h2></div>
                <div className="card"><h2 className="card-heading">Exam Activity</h2></div>
                <div className="card"><h2 className="card-heading">Evaluate Exam</h2></div>
            </div>
        </div>
    )
}

export default AdminDashboard;