import React from 'react'
import classes from './GInput.module.sass'

// eslint-disable-next-line react/display-name
const GInput = React.forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            className={classes.gInput}
            {...props}
        />
    )
})

export default GInput
