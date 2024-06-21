import React from 'react';
import { GrAnnounce } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RiFeedbackLine } from "react-icons/ri";

import './AdminSidebar.css'; // Import your CSS file

const AdminSidebar = ({ collapsed, toggleSidebar, setSelectedItem }) => {
    const sidebarClass = collapsed ? 'admin-sidebar-collapsed' : 'admin-sidebar-expanded';

    const handleItemClick = (item) => {
        setSelectedItem(item);
        if (!collapsed) {
            toggleSidebar();
        }
    };

    return (
        <div className={`admin-sidebar ${sidebarClass}`}>
            <div className="sidebar-header">
                <div className={`logo ${collapsed ? 'logo-hidden' : ''}`}>Admin</div>
                <button className="collapse-btn" onClick={toggleSidebar}>
                    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
            </div>
            <div className="sidebar-content">
                <ul className={collapsed ? 'collapsed' : ''}>
                    <li onClick={() => handleItemClick('dashboard')}>
                        <RiDashboardFill className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Dashboard</span>
                    </li>
                    <li onClick={() => handleItemClick('student-performance')}>
                        <GrDocumentPerformance className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Student Performance</span>
                    </li>
                    <li onClick={() => handleItemClick('scheduled-tests')}>
                        <RiCalendarScheduleLine className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Scheduled Tests</span>
                    </li>
                    <li onClick={() => handleItemClick('view-feedback')}>
                        <RiFeedbackLine className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>View Feedback</span>
                    </li>
                    <li onClick={() => handleItemClick('announce')}>
                        <GrAnnounce className="icon" /> <span className={collapsed ? 'text-hidden' : ''}>Announce</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;