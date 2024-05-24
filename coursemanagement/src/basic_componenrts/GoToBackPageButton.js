import React from "react";
import { useNavigate } from 'react-router-dom';


const GoToBackPageButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button style={{ textDecoration: 'none' }} onClick={handleGoBack} type="button " className="btn btnaddnewcourse btn-primary">
           <span className="material-symbols-outlined">Chevron_Left</span> Go to Backpage
        </button>
    );
};

export default GoToBackPageButton;
