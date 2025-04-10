// import { useState, useEffect, useContext } from 'react'
import { ProfileIconInterface } from './ProfileIcon.interface'

/// TODO: update interface/arguments for ProfileIcon
const ProfileIcon = ({testID, style, type, size, props }:ProfileIconInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `ProfileIcon` }>
                <img src='https://via.placeholder.com/150' alt='Profile Icon' />
        </div>
    )

}

export default ProfileIcon
