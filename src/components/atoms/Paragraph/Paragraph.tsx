// import { useState, useEffect, useContext } from 'react'
import { ParagraphInterface } from './Paragraph.interface'

/// TODO: update interface/arguments for Paragraph
const Paragraph = ({testID, style, type, size, props }:ParagraphInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Paragraph` }>
        </div>
    )

}

export default Paragraph
