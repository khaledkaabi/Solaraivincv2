import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from '../assets/logo/logosolar.svg'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        // localStorage.clear()
        // navigate('/login')
    }

    return (
        <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom fixed-top">
            <div className="d-flex align-items-center">
                <img src={logo} alt="Logo" className="logo" style={{ width: '50px' }} />
            </div>
            <div className="d-flex align-items-center">
                <SearchIcon className="mx-2" />
                <NotificationsIcon className="mx-2" />
                <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>
                    <LogoutIcon sx={{ marginRight: 1 }} />
                    <Typography>Déconnexion</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Header;
