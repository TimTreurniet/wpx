// import { useState, useEffect, useContext } from 'react'
import { TopbarInterface } from './Topbar.interface'
import { ConnectionStatus, ProfileStatus } from '../../molecules'

/// TODO: update interface/arguments for Topbar
const Topbar = ({testID, style, type, size, props }:TopbarInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Topbar` }>
                <ConnectionStatus />
                <ProfileStatus />
        </div>
    )

}

export default Topbar
