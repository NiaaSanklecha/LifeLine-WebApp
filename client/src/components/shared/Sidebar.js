import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { MdMenu } from "react-icons/md";
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookMedical, faCalendarCheck, faUser, faHeartPulse, faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [collapsed, setCollapsed] = useState(false);
  
    const donorMenu = [{
        name: "Dashboard",
        link: "/dashboard",
        icon: faHome
    },
    {
        name: "Book Appointments",
        link: "/book-appointment",
        icon: faBookMedical
    },
    {
        name: "Appointments",
        link: "/appointments",
        icon: faCalendarCheck
    },
    {
        name: "Profile",
        link: "/profile",
        icon: faUser
    },
    {
        name: "Donor Stats",
        link: "/donor-stats",
        icon: faHeartPulse
    },
    {
        name: "Donation History",
        link: "",
        icon: faHandHoldingDroplet
    }
    ];
    const receiverMenu = [
        {
            name: "Dashboard",
            link: "",
            icon: faHome
        },

        {
            name: "Request List",
            link: "/requests",
            icon: faBookMedical
        },
    {
        name: "Profile",
        link: "/profile",
        icon: faUser
    }
    ];
    const adminMenu = [
        {
            name: "Dashboard",
            link:"",
            icon:  faBookMedical
        },
        {
            name: "Donations",
            link: "/donation-requests",
            icon: faBookMedical
        },
        {
            name: "Requests",
            link:"/blood-requests",
            icon:  faBookMedical
        },
        {
            name: "Inventory",
            link:"/inventory",
            icon: faBookMedical 
        },
        
    ];
    const handleClick = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div style={{ display: "flex" }}>
            <Sidebar className="sidebar" collapsed={collapsed}>
                <div className="sidebar-header">
                    <MdMenu className="hamburger" onClick={handleClick} />
                    <h2 style={{ color: '#fff', margin: 0, textAlign: 'center' }}>Menu</h2>
                </div>
                <Menu>
                    {
                        user.role === "donor" && (
                            donorMenu.map((menu) => (
                                <MenuItem
                                    key={menu.name}
                                    icon={<FontAwesomeIcon icon={menu.icon} style={{ fontSize: '1.25rem', color: '#fff' }} />}
                                    component={<Link to={menu.link} style={{ color: '#000', textDecoration: 'none' }} />}
                                    style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}
                                >
                                    {menu.name}
                                </MenuItem>
                            ))
                        )
                    }
                    {
                        user.role === "receiver" && (
                            receiverMenu.map((menu) => (
                                <MenuItem
                                    key={menu.name}
                                    icon={<FontAwesomeIcon icon={menu.icon} style={{ fontSize: '1.25rem', color: '#fff' }} />}
                                    component={<Link to={menu.link} style={{ color: '#000', textDecoration: 'none' }} />}
                                    style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}
                                >
                                    {menu.name}
                                </MenuItem>
                            ))
                        )
                    }{
                        user.role === "admin" && (
                            adminMenu.map((menu) => (
                                <MenuItem
                                    key={menu.name}
                                    icon={<FontAwesomeIcon icon={menu.icon} style={{ fontSize: '1.25rem', color: '#fff' }} />}
                                    component={<Link to={menu.link} style={{ color: '#000', textDecoration: 'none' }} />}
                                    style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}
                                >
                                    {menu.name}
                                </MenuItem>
                            ))
                        )
                    }
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarMenu;
