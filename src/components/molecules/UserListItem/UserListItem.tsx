// import { useState, useEffect, useContext } from 'react'
import { UserListItemInterface } from './UserListItem.interface'

/// TODO: update interface/arguments for UserListItem
const UserListItem = ({testID, style, type, size, props }:UserListItemInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `UserListItem` }>
        </div>
    )

}

export default UserListItem
