// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Style-sheets/Sidebar.css';
import {
  FaHome,
  FaWallet,
  FaFileMedical,
  FaPrescriptionBottleAlt,
  FaRegStar,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: <FaHome />, path: '/dashboard', label: 'Dashboard' },
    { icon: <FaWallet />, path: '/health-wallet', label: 'Health Wallet' },
    { icon: <FaFileMedical />, path: '/medical-records', label: 'Medical Records' },
    { icon: <FaPrescriptionBottleAlt />, path: '/prescriptions', label: 'Prescriptions' },
    { icon: <FaRegStar />, path: '/recommendations', label: 'Recommendations' },
    { icon: <FaCog />, path: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/logout">
              <FaSignOutAlt />
              <span>Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;