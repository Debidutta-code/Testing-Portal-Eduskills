import React, { useState } from 'react';
import CandidateSidebar from "../components/CandidateSidebar";
import './Candidate.css'; // Import your CSS file
import CandidateDashboard from "../components/CandidateDashboard";
import CandidateScheduledExams from "../components/CandidateScheduledExams";
import CandidatePerformance from "../components/CandidatePerformance";
import CandidateExamHistory from "../components/CandidateExamHistory";
import CandidateEditProfile from "../components/CandidateEditProfile";
import CandidateChangePassword from "../components/CandidateChangePassword";
import Navbar from '../components/Navbar';


const Candidate = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState('dashboard'); // Default selected item

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case 'dashboard':
                return <CandidateDashboard />;
            case 'scheduled-exams':
                return <CandidateScheduledExams />;
            case 'performance':
                return <CandidatePerformance />;
            case 'exam-history':
                return <CandidateExamHistory />;
            case 'edit-profile':
                return <CandidateEditProfile />;
            case 'change-password':
                return <CandidateChangePassword />;
            case 'logout':
                // Handle logout logic here
                return <div>Logging out...</div>;
            default:
                return <CandidatePerformance />;
        }
    };

    return (
        <>
            <Navbar />
            <div className="candidate-main-component">
            <CandidateSidebar
                collapsed={sidebarCollapsed}
                toggleSidebar={toggleSidebar}
                setSelectedItem={setSelectedItem}
            />
            <div className={`candidate-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
                {renderContent()}
            </div>
        </div>
        </>
    );
}

export default Candidate;