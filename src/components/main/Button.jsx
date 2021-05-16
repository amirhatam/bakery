import React from 'react';


const Button = ({ children, isSelected, onClick }) => {
    const btnClasses = ['btn'];
    btnClasses.push(isSelected ? 'btn-primary' : 'btn-outline-primary');
    return (
        <button 
            type="button" 
            className="btn btn-warning px-5 mb-1 mx-2 fw-bold" 
            onClick={onClick}>
                {children}
        </button>
    );
}

export default Button;