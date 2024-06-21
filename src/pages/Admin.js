import React, { useState } from 'react';
import AdminSidebar from "../components/AdminSidebar";
import './Admin.css'; // Import your CSS file
import AdminDashboard from "./AdminDashboard";
import ScheduledTests from "./ScheduledTests";
import StudentPerformance from "./StudentPerformance";
import Navbar from '../components/Navbar';

const Admin = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('dashboard'); // Default selected item

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case 'dashboard':
                return <AdminDashboard />;
            case 'student-performance':
                return <StudentPerformance />;
            case 'scheduled-tests':
                return <ScheduledTests />;
            // Add more cases as needed
            default:
                return <AdminDashboard />;
        }
    };

    return (
        <>
            <Navbar />
            <div className="admin-main-component">
            <AdminSidebar
                collapsed={sidebarCollapsed}
                mobileMenuOpen={mobileMenuOpen}
                toggleSidebar={toggleSidebar}
                toggleMobileMenu={toggleMobileMenu}
                setSelectedItem={setSelectedItem}
            />
            <div className={`admin-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
                {renderContent()}
            </div>
        </div>
        </>
    );
}

export default Admin;