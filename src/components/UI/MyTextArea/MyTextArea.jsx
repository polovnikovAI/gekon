import React from 'react';
import cl from './MyTextArea.module.sass'

const MyTextArea = (children) => {
    return (
        <textarea type="text" className={cl.myTextArea} {...children} />
    );
};

export default MyTextArea;