import React from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { RiDashboardFill, RiHistoryLine, RiProfileLine, RiLockPasswordLine, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineSchedule } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";

import './CandidateSidebar.css'; // Import your CSS file

const CandidateSidebar = ({ collapsed, toggleSidebar, setSelectedItem }) => {
    const sidebarClass = collapsed ? 'candidate-sidebar-collapsed' : 'candidate-sidebar-expanded';

    const handleItemClick = (item) => {
        setSelectedItem(item);
        if (!collapsed) {
            toggleSidebar();
        }
    };

    return (
        <div className={`candidate-sidebar ${sidebarClass}`}>
            <div className="sidebar-header">
                <div className={`logo ${collapsed ? 'logo-hidden' : ''}`}>Candidates</div>
                <button className="collapse-btn" onClick={toggleSidebar}>
                    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
            </div>
            <div className="sidebar-content">
                <ul className={collapsed ? 'collapsed' : ''}>
                    <li onClick={() => handleItemClick('dashboard')}>
                        <RiDashboardFill className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Dashboard</span>
                    </li>
                    <li onClick={() => handleItemClick('scheduled-exams')}>
                        <MdOutlineSchedule className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Scheduled or Ongoing Exams</span>
                    </li>
                    <li onClick={() => handleItemClick('performance')}>
                        <GrDocumentPerformance className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Performance</span>
                    </li>
                    <li onClick={() => handleItemClick('exam-history')}>
                        <RiHistoryLine className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Exam History</span>
                    </li>
                    <li onClick={() => handleItemClick('edit-profile')}>
                        <RiProfileLine className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Edit Profile</span>
                    </li>
                    <li onClick={() => handleItemClick('change-password')}>
                        <RiLockPasswordLine className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Change Password</span>
                    </li>
                    <li onClick={() => handleItemClick('logout')}>
                        <RiLogoutBoxLine className='icon' /> <span className={collapsed ? 'text-hidden' : ''}>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CandidateSidebar;