// import { useState, useEffect, useContext } from 'react'
import { IconInterface } from './Icon.interface'

/// TODO: update interface/arguments for Icon
const Icon = ({testID, style, type, size, props }:IconInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Icon` }>
        </div>
    )

}

export default Icon
