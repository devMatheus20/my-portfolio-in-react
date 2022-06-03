import React from 'react'
import * as S from './styles'

//Components
import Button from '../../Components/Button'


// Imagens
import ImageHome from '../../Assets/home.svg'



function Portfolio() {

  const myName = "<Matheus Santos/>"

  return (
    <>

      <S.Header>
        <S.Logo><a href='/'>{myName}</a></S.Logo>

        <S.List>
          <S.Link href='#sobre'>Sobre mim</S.Link>
          <S.Link href='#projetos'>Projetos</S.Link>
          <S.Link href='#skills'>Conhecimentos</S.Link>
          <S.Link href='#contato'>Contato</S.Link>
        </S.List>
      </S.Header>


      <S.Home id='home'>
        <S.ArticleHome>
          <S.SpanHome>Olá, meu nome é</S.SpanHome>

          <S.H1Home><span>Ma</span>theus <span>Sant</span>os</S.H1Home>

          <S.ParagraphHome>I build things for the web.</S.ParagraphHome>

          <S.DivButtons>
            <Button isWhite={true} link="#Contact">Entrar em contato</Button>
            <Button link="#">CV Download</Button>
          </S.DivButtons>
        </S.ArticleHome>

        <S.ImageHome src={ImageHome} alt="Imagem Ilustrativa" />
      </S.Home>


      <S.About id='sobre'>
        <S.ImageAbout src={require('../../Assets/perfil.png')} alt='Imagem Do Meu Perfil Do GitHub' />

        <S.ArticleAbout>
          <S.TitleAbout>Quem sou</S.TitleAbout>
          <S.ParagraphAbout>
            Sou Matheus Santos Souza, tenho 20 anos, sou desenvolvedor
            focado no front-end e venho constantemente aprimorando meus conhecimentos em
            <span> HTML, CSS, JavaScript, ReactJS</span>.
            Estou cursando Análise e Desenvolvimento de
            Sistemas na Faculdade Estácio, atualmente no terceiro semestre e sócio do DevClub.
          </S.ParagraphAbout>

        </S.ArticleAbout>
      </S.About>



    </>
  );
}

export default Portfolio;
