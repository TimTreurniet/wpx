// import { useState, useEffect, useContext } from 'react'
import { StatusIconInterface } from './StatusIcon.interface'

/// TODO: update interface/arguments for StatusIcon
const StatusIcon = ({testID, style, type, size, props }:StatusIconInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `StatusIcon` }>
                <img src='https://via.placeholder.com/150' alt='Status Icon' />
        </div>
    )

}

export default StatusIcon
