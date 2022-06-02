import React from 'react'
import * as S from './styles'


function About() {
    return (
        <S.About>
            <S.Image src={require('../../Assets/perfil.png')} alt='Imagem Do Meu Perfil Do GitHub' />

            <S.Article>
                <S.Title>Quem sou</S.Title>
                <S.Paragraph>
                    Sou Matheus Santos Souza, tenho 20 anos, sou desenvolvedor
                    focado no front-end e venho constantemente aprimorando meus conhecimentos em 
                    <span> HTML, CSS, JavaScript, ReactJS</span>.
                    Estou cursando Análise e Desenvolvimento de
                    Sistemas na Faculdade Estácio, atualmente no terceiro semestre e sócio do DevClub.
                </S.Paragraph>

            </S.Article>
        </S.About>
    )
}


export default About