import React from "react";
import classes from "./GInput.module.sass";

const GInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.gInput} {...props} />
    );

});


export default GInput;