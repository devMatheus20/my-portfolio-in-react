import React from 'react'
import * as S from './styles'


function Header() {

    const myName = "<Matheus Santos/>"

    return(
        <S.Header>
            <S.H1><a href='#'>{myName}</a></S.H1>

            <S.List>
                <S.Link href='#About'>Sobre mim</S.Link>
                <S.Link href='#Projects'>Projetos</S.Link>
                <S.Link href='#Skills'>Conhecimentos</S.Link>
                <S.Link href='#Contact'>Contato</S.Link>
            </S.List>
        </S.Header>
    )
}


export default Header