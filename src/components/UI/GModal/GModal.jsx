import React from "react";
import classes from './GModal.module.css'

const GModal = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.gModal]
    const contenClasses = [classes.gModalContent]
    if (visible) {
        rootClasses.push(classes.active)
        contenClasses.push(classes.active)
    }


    return (


        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* для выхода из модалки по клику не по ней
            */}
            <div className={contenClasses.join(" ")} onClick={(event) => event.stopPropagation()}>

                {children}

            </div>

        </div>


    );

};


export default GModal;