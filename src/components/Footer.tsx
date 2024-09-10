import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';

const Footer: React.FC = () => {
    return (
        <div className="d-flex justify-content-around align-items-center p-3 bg-light border-top fixed-bottom">
            <div className="text-center">
                <ChatBubbleOutlineIcon style={{ color: '#000' }} />
                <p className="mb-0" style={{ color: '#000' }}>Livraisons</p>
            </div>
            <div className="text-center">
                <GroupIcon style={{ color: '#cfcfcf' }} />
                <p className="mb-0" style={{ color: '#cfcfcf' }}>Documents</p>
            </div>
        </div>
    );
};

export default Footer;
