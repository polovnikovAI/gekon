import React from 'react';
import cl from './MyButton.module.sass'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myButton}>
            {children}
        </button>
    );
};

export default MyButton;