import React from 'react'
import { Button } from './styles'


function ContainerButton(props) {
    return (
        <Button isWhite={props.isWhite} href={props.link}>{props.children}</Button>
    )
}


export default ContainerButton