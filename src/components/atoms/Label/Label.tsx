// import { useState, useEffect, useContext } from 'react'
import { LabelInterface } from './Label.interface'

/// TODO: update interface/arguments for Label
const Label = ({testID, style, type, size, props }:LabelInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Label` }>
        </div>
    )

}

export default Label
