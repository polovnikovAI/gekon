import React from 'react';
import cl from './MyInput.module.css'

const MyInput = (children) => {
    return (
        <input type="text" className={cl.myInput} {...children} />
    );
};

export default MyInput;