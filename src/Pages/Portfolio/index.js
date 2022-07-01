import React, { useState } from 'react'
import * as S from './styles'

import { IconContext } from "react-icons";
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiStyledcomponents } from 'react-icons/si'


import { ReactTypical } from '@deadcoder0904/react-typical'
import '@deadcoder0904/react-typical/dist/styles.min.css'


//Components
import Button from '../../Components/Button'
import Point from '../../Components/Point'

// Imagens
import ImageHome from '../../Assets/home.svg'



function Portfolio() {

  const myName = "<Matheus Santos/>"

  const textsSkills = [
    "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.",
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.",
    "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.",
    "Responsividade utilizando BreakPoints e propriedades de flexibilização de elementos.",
    "Boas práticas, como: elementos semânticos, descrição de imagens, níveis de títulos, botões e links."
  ]

  const [boolean, setBoolean] = useState(false)
  const [textButton, setTextButton] = useState("Ver mais")
  const [nameCardSkills, setNameCardSkills] = useState("")
  const [textCardSkills, setTextCardSkills] = useState("* passe o cursor sobre os ícones para saber mais *")



  function showMore() {
    if (boolean === false) {
      setBoolean(true)
      setTextButton("Ver menos")
    } else {
      setBoolean(false)
      setTextButton("Ver mais")
    }
  }

  function changeDescription(cardName) {
    if(cardName === 'html') {
      setNameCardSkills("HTML")
      setTextCardSkills(textsSkills[0])
    }

    if(cardName === 'css') {
      setNameCardSkills("CSS")
      setTextCardSkills(textsSkills[1])
    }

    if(cardName === 'js') {
      setNameCardSkills("JavaScript")
      setTextCardSkills(textsSkills[2])
    }

    if(cardName === 'git') {
      setNameCardSkills("Git")
      setTextCardSkills(textsSkills[3])
    }

    if(cardName === 'react') {
      setNameCardSkills("ReactJS")
      setTextCardSkills(textsSkills[4])
    }

    if(cardName === 'styled') {
      setNameCardSkills("Styled Components")
      setTextCardSkills(textsSkills[5])
    }

    if(cardName === 'responsivo') {
      setNameCardSkills("Responsividade")
      setTextCardSkills(textsSkills[6])
    }

    if(cardName === 'acessibilidade') {
      setNameCardSkills("Acessibilidade")
      setTextCardSkills(textsSkills[7])
    }
  }

  function clearDescription() {
    setNameCardSkills('')
    setTextCardSkills("* passe o cursor sobre os ícones para saber mais *")
  }

  return (
    <>

      <S.Header>
        <S.Logo><a href='/'>{myName}</a></S.Logo>

        <S.List>
          <S.Link href='#about'>Sobre mim</S.Link>
          <S.Link href='#projects'>Projetos</S.Link>
          <S.Link href='#skills'>Conhecimentos</S.Link>
          <S.Link href='#contact'>Contato</S.Link>
        </S.List>
      </S.Header>


      <S.Home id='home'>
        <S.ArticleHome>
          <S.SpanHome>Olá, meu nome é</S.SpanHome>

          <S.H1Home><span>Ma</span>theus <span>Sant</span>os</S.H1Home>

          <S.ParagraphHome>
            <ReactTypical steps={['I build things for the web.']} wrapper="p" />
          </S.ParagraphHome>

          <S.DivButtons>
            <Button isWhite={true} link="#Contact">Entrar em contato</Button>
            <Button link="#">CV Download</Button>
          </S.DivButtons>
        </S.ArticleHome>

        <S.ImageHome src={ImageHome} alt="Imagem Ilustrativa" />
      </S.Home>


      <S.About id='about'>
        <S.ImageAbout src={require('../../Assets/perfil.png')} alt='Imagem Do Meu Perfil Do GitHub' />

        <S.ArticleAbout>

          <S.TitleAbout>
            Quem sou
            <Point />
          </S.TitleAbout>

          <S.ParagraphAbout>
            Sou Matheus Santos Souza, tenho 20 anos, sou desenvolvedor
            focado no front-end e venho constantemente aprimorando meus conhecimentos em
            <span> HTML, CSS, JavaScript e ReactJS</span>.
            Estou cursando Análise e Desenvolvimento de
            Sistemas na Faculdade Estácio, atualmente no terceiro semestre e sócio do DevClub.
          </S.ParagraphAbout>

        </S.ArticleAbout>
      </S.About>


      <S.Projects id='projects'>

        <S.TitleProjects>
          Projetos
          <Point />
        </S.TitleProjects>

        <S.ContainerProjects isHeight={boolean}>

          <S.Row1>
            <S.CardProject>
              <img src={require('../../Assets/clock.png')} alt="" />

              <h4>Relógio</h4>

              <p>O projeto consiste em um relógio digital com 3 funções, sendo elas: Relógio, Cronômetro e Temporizador.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

            <S.CardProject>
              <img src={require('../../Assets/prime-filmes.png')} alt="" />

              <h4>Filmaria</h4>

              <p>Um site que apresenta alguns filmes através do "consumo" de uma API.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

            <S.CardProject>
              <img src={require('../../Assets/convert.png')} alt="" />

              <h4>Conversor</h4>

              <p>Conversor de moedas que converte de Real para diferentes moedas.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

            <S.CardProject>
              <img src={require('../../Assets/europay.png')} alt="" />

              <h4>Europay</h4>

              <p>Uma Landing Page de uma empresa chamada Europay.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

          </S.Row1>

          <S.Row2>
            <S.CardProject>
              <img src={require('../../Assets/fortune-cookie.png')} alt="" />

              <h4>Biscoito da Sorte</h4>

              <p>Projeto feito com objetivo de praticar as tecnologias abordadas.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

            <S.CardProject>
              <img src={require('../../Assets/stopwatch.png')} alt="" />

              <h4>Cronômetro</h4>

              <p>Projeto feito com objetivo de praticar as tecnologias abordadas.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

            <S.CardProject>
              <img src={require('../../Assets/netflix.png')} alt="" />

              <h4>Netflix</h4>

              <p>Projeto feito com objetivo de praticar as tecnologias abordadas.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>

            <S.CardProject>
              <img src={require('../../Assets/brand.png')} alt="" />

              <h4>Brand</h4>

              <p>Projeto feito com objetivo de praticar as tecnologias abordadas.</p>

              <div className='btns-project'>
                <button className='view-live'>View Live</button>
                <button className='github-repo'>GitHub Repo</button>
              </div>
            </S.CardProject>
          </S.Row2>

        </S.ContainerProjects>

        <button onClick={showMore} className='show-more'>{textButton}</button>

      </S.Projects>


      <S.Skills id='skills'>

        <S.ArticleSkills>

          <S.TitleSkills>
            Conhecimentos
            <Point />
          </S.TitleSkills>

          <S.CardName>{nameCardSkills}</S.CardName>

          <S.InfoSkills>{textCardSkills}</S.InfoSkills>

        </S.ArticleSkills>

        <S.GridSkills>

          <S.CardSkill onMouseOver={() => changeDescription('html')} onMouseOut={clearDescription}>
            <IconContext.Provider value={{ className: "card-icon" }}>
              <AiFillHtml5 />
            </IconContext.Provider>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('css')} onMouseOut={clearDescription}>
            <IconContext.Provider value={{ className: "card-icon" }}>
              <IoLogoCss3 />
            </IconContext.Provider>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('js')} onMouseOut={clearDescription}>
            <IconContext.Provider value={{ className: "card-icon-2" }}>
              <SiJavascript />
            </IconContext.Provider>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('git')} onMouseOut={clearDescription}>
            <IconContext.Provider value={{ className: "card-icon" }}>
              <FaGitAlt />
            </IconContext.Provider>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('react')} onMouseOut={clearDescription}>
            <IconContext.Provider value={{ className: "card-icon" }}>
              <FaReact />
            </IconContext.Provider>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('styled')} onMouseOut={clearDescription}>
            <IconContext.Provider value={{ className: "card-icon" }}>
              <SiStyledcomponents />
            </IconContext.Provider>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('responsivo')} onMouseOut={clearDescription}>
            <img src={require('../../Assets/responsivo.png')} alt="Icone de Responsividade"/>
          </S.CardSkill>

          <S.CardSkill onMouseOver={() => changeDescription('acessibilidade')} onMouseOut={clearDescription}>
            <img src={require('../../Assets/acessibilidade.png')} alt="Icone de Acessibilidade"/>
          </S.CardSkill>

        </S.GridSkills>
      </S.Skills>

    </>
  )
}

export default Portfolio
