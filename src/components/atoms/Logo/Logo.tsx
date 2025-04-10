// import { useState, useEffect, useContext } from 'react'
import { LogoInterface } from './Logo.interface'

/// TODO: update interface/arguments for Logo
const Logo = ({testID, text }:LogoInterface) => {

    return(
        <div data-testid={ testID }

             className={ `Logo` }>
          { text }
        </div>
    )

}

export default Logo
