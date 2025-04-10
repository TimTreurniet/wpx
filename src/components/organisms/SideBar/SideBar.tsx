// import { useState, useEffect, useContext } from 'react'
import { SideBarInterface } from './SideBar.interface'
import {IconList} from "../../molecules";

const SideBar = ({testID, sidebarItems }:SideBarInterface) => {

    return(
        <div data-testid={ testID }
             className={ `SideBar` }>
            <IconList icons={ sidebarItems } />
        </div>
    )

}

export default SideBar
