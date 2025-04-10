// import { useState, useEffect, useContext } from 'react'
import { IconListInterface } from './IconList.interface'
import {IconButton} from "../../atoms";
import {SidebarItemsType} from "../../../__types__";

const IconList = ({testID, icons }:IconListInterface) => {

    return(
        <div data-testid={ testID }
             className={ `IconList` }>
            {
                icons.map((icon : SidebarItemsType, index) => (
                    <IconButton key={ index } icon={ icon }/>
                ))
            }
        </div>
    )

}

export default IconList
