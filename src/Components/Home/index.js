import React from 'react'
import * as S from './styles'

import Button from './Button'

import Image from '../../Assets/svg.svg'


function Home() {
    return (
        <S.Home>
            <S.Article>
                <S.Span>Olá, meu nome é</S.Span>

                <S.H1><span>Ma</span>theus <span>Sant</span>os</S.H1>

                <S.Paragraph>I build things for the web.</S.Paragraph>

                <S.DivButtons>
                    <Button isWhite={true} link="#Contact">Entrar em contato</Button>
                    <Button link="#">CV Download</Button>
                </S.DivButtons>
            </S.Article>

            <S.Image src={Image} alt="Imagem Ilustrativa"/>
        </S.Home>
    )
}


export default Home