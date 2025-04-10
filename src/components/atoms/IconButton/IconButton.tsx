// import { useState, useEffect, useContext } from 'react'
import { IconButtonInterface } from './IconButton.interface'

const IconButton = ({testID, type = 'regular', icon, size = 'm' }:IconButtonInterface) => {


  const handleClick = () => {
    icon.action()
  }
    return(
        <div data-testid={ testID } onClick={ handleClick }
             data-object-type={ icon.isActive ? "active" : "inactive" }
             className={ `IconButton` }>
            <div className={ `IconButton__icon IconButton__icon--${size}` }>
                { icon.icon.substring(0, 1).toUpperCase() }
            </div>
        </div>

    )

}

export default IconButton
