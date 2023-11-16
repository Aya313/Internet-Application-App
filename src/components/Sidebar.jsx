import { Build, BuildCircleOutlined, CenterFocusStrongOutlined, CenterFocusStrongTwoTone, DepartureBoardTwoTone, GiteOutlined, Home, HouseOutlined, Rule, Title, Unarchive, Work } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsPlus, BsPlusCircleFill } from 'react-icons/bs';

import {
        FaBars,
        FaBuilding,
        FaCodeBranch
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
        const { t } = useTranslation();
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        const menuItem = [
                {
                        path: "/",
                        name: t('الرئيسية'),
                        icon: <Home />
                },
                {
                        path: "/department",
                        name: t("المجموعات"),
                        icon: <GiteOutlined />
                },

        ]
        return (
                <div>

                        <div className="container">
                                <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
                                        <div className="top_section">
                                                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">{t('Drive')}</h1>
                                                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                                        <FaBars onClick={toggle} />
                                                </div>

                                        </div>
                                        {isOpen &&
                                                <Box sx={{ justifyContent: 'space-between' }}>
                                                        <Button
                                                                sx={{
                                                                        backgroundColor: '#1976D2',
                                                                        color: 'white',
                                                                        justifyContent: 'center',
                                                                        textAlign: 'center',
                                                                        width: '100px',
                                                                        display: 'flex',
                                                                        borderRadius: '10px',
                                                                        fontSize: '18px',
                                                                        fontFamily: 'Cairo',
                                                                        m: 2,
                                                                        p: 2,
                                                                        '&:hover': {
                                                                                backgroundColor: '#535bf2',
                                                                        },
                                                                }}
                                                                variant="contained"
                                                                // startIcon={<BsPlusCircleFill sx={{ backgroundColor: 'white', color: 'red', marginLeft: 3 }} />}
                                                        >
                                                                إضافة
                                                        </Button>
                                                </Box>
                                        }


                                        {
                                                menuItem.map((item, index) => (
                                                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                                                <div className="icon">{item.icon}</div>
                                                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                                        </NavLink>
                                                ))
                                        }
                                </div>

                        </div>
                        <main>{children}</main>
                </div>
        );
};

export default Sidebar;

