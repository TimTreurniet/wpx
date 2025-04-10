// import { useState, useEffect, useContext } from 'react'
import { HeadingInterface } from './Heading.interface'

/// TODO: update interface/arguments for Heading
const Heading = ({testID, style, type, size, props }:HeadingInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Heading` }>
        </div>
    )

}

export default Heading
