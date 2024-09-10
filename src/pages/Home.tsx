import React from 'react';
import { IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { deliveryData, Delivery } from '../data/deliveryData';
import moment from 'moment';
import 'moment/locale/fr'; // Import French locale for "il y a"
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Home.css"

moment.locale('fr');

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'created':
            return <LocalShippingIcon color="primary" />;
        case 'signed':
            return <DescriptionIcon color="primary" />;
        case 'payed':
            return <PersonSearchIcon color="primary" />;
        case 'selected_livreur':
            return <LocalShippingIcon color="primary" />;
        case 'accepted':
            return <CheckCircleOutlineIcon color="primary" />;
        case 'problem':
            return <ErrorOutlineIcon color="error" />;
        case 'done':
            return <CheckCircleOutlineIcon color="primary" />;
        default:
            return null;
    }
};

const Home: React.FC = () => {

    const formatDate = (date: string) => {
        return moment(date).fromNow();
    };

    return (
        <div>
            <Header />
            <div className="mt-4 home-padding">
                {deliveryData.map((delivery: Delivery) => (
                    <div key={delivery.id} className="d-flex flex-column p-3 mb-3 border rounded">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <IconButton>
                                    {getStatusIcon(delivery.status)}
                                </IconButton>
                                <h5 className="ms-2 mb-0">{delivery.status}</h5>
                            </div>
                            <small>{formatDate(delivery.last_msg_date)}</small>
                        </div>
                        <div className="mt-2">
                            <p className="mb-1">{delivery.last_msg}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
