import React, { useEffect, useState } from 'react'
import * as S from './styles'

import ScrollReveal from 'scrollreveal';

import { IconContext } from "react-icons";
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiStyledcomponents } from 'react-icons/si'

import ImageHome from '../../Assets/home.svg'
import WhatsApp from '../../Assets/whatsapp.svg'
import LinkedIn from '../../Assets/linkedIn.svg'
import Discord from '../../Assets/discord.svg'
import GitHub from '../../Assets/GitHub.svg'

import Point from '../../Components/Point'

import { ReactTypical } from '@deadcoder0904/react-typical'
import '@deadcoder0904/react-typical/dist/styles.min.css'



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

  const [menu, setMenu] = useState(false)
  const [boolean, setBoolean] = useState(true)
  const [textButton, setTextButton] = useState("Ver mais")
  const [nameCardSkills, setNameCardSkills] = useState("")
  const [textCardSkills, setTextCardSkills] = useState("* passe o cursor sobre os ícones para saber mais *")



  useEffect(() => {
    ScrollReveal({ reset: true })

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'top',
      reset: false
    })


    ScrollReveal().reveal('.d-200', { delay: 200 })
    ScrollReveal().reveal('.d-300', { delay: 300 })
    ScrollReveal().reveal('.d-400', { delay: 400 })

  }, [])

  function showMore() {
    if (boolean === true) {
      setBoolean(false)
      setTextButton("Ver menos")
    } else {
      setBoolean(true)
      setTextButton("Ver mais")
    }
  }

  function changeDescription(cardName) {
    if (cardName === 'html') {
      setNameCardSkills("HTML")
      setTextCardSkills(textsSkills[0])
    }

    if (cardName === 'css') {
      setNameCardSkills("CSS")
      setTextCardSkills(textsSkills[1])
    }

    if (cardName === 'js') {
      setNameCardSkills("JavaScript")
      setTextCardSkills(textsSkills[2])
    }

    if (cardName === 'git') {
      setNameCardSkills("Git")
      setTextCardSkills(textsSkills[3])
    }

    if (cardName === 'react') {
      setNameCardSkills("ReactJS")
      setTextCardSkills(textsSkills[4])
    }

    if (cardName === 'styled') {
      setNameCardSkills("Styled Components")
      setTextCardSkills(textsSkills[5])
    }

    if (cardName === 'responsivo') {
      setNameCardSkills("Responsividade")
      setTextCardSkills(textsSkills[6])
    }

    if (cardName === 'acessibilidade') {
      setNameCardSkills("Acessibilidade")
      setTextCardSkills(textsSkills[7])
    }
  }

  function clearDescription() {
    setNameCardSkills('')
    setTextCardSkills("* passe o cursor sobre os ícones para saber mais *")
  }

  function showMenu() {
    if (menu === false) setMenu(true)
    else setMenu(false)
  }

  return (
    <>

      <S.Header>
        <div className='grid-header'>
          <S.Logo><a href='/'>{myName}</a></S.Logo>

          <S.List className={menu ? 'listFade' : undefined}>
            <S.Link onClick={menu ? showMenu : undefined} href='#about'>Sobre mim</S.Link>
            <S.Link onClick={menu ? showMenu : undefined} href='#projects'>Projetos</S.Link>
            <S.Link onClick={menu ? showMenu : undefined} href='#skills'>Conhecimentos</S.Link>
            <S.Link onClick={menu ? showMenu : undefined} href='#contact'>Contato</S.Link>
          </S.List>

          <S.Menu onClick={showMenu}>
            <div className={menu ? 'line-1t' : undefined} />
            <div className={menu ? 'line-2t' : undefined} />
            <div className={menu ? 'line-3t' : undefined} />
          </S.Menu>
        </div>
      </S.Header>

      <main>

        <S.Home id='home'>
          <div className='grid'>
            <S.ArticleHome>
              <S.SpanHome className='d-200'>Olá, meu nome é</S.SpanHome>

              <S.H1Home className='d-300'><span>Ma</span>theus <span>Sant</span>os</S.H1Home>

              <S.ParagraphHome>
                <ReactTypical className='d-300' steps={[1400, 'I build things for the web.']} wrapper="p" />
              </S.ParagraphHome>

              <S.ButtonsHome className='d-400'>

                <a className='contact' href='#contact'>Entrar em contato</a>

                <a className='cv-download' href={require("../../Assets/currículo-matheus.pdf")} download>CV Download</a>
              </S.ButtonsHome>
            </S.ArticleHome>

            <S.ImageHome src={ImageHome} alt="Imagem Ilustrativa" />
          </div>
        </S.Home>


        <S.About id='about'>
          <div className='grid'>
            <S.ImageAbout className="d-200" src={require('../../Assets/perfil.png')} alt='Imagem Do Meu Perfil Do GitHub' />

            <S.ArticleAbout>

              <S.TitleAbout className='d-300'>
                Quem sou
                <Point />
              </S.TitleAbout>

              <S.ParagraphAbout className='d-300'>
                Sou Matheus Santos Souza, tenho 20 anos, sou desenvolvedor
                focado no front-end e venho constantemente aprimorando meus conhecimentos em
                <span> HTML, CSS, JavaScript e ReactJS</span>.
                Estou cursando Análise e Desenvolvimento de
                Sistemas na Faculdade Estácio, atualmente no terceiro semestre e sócio do DevClub.
              </S.ParagraphAbout>

            </S.ArticleAbout>
          </div>
        </S.About>


        <S.Projects id='projects'>

          <div className='grid'>

            <S.TitleProjects className='d-200'>
              Projetos
              <Point />
            </S.TitleProjects>

            <S.ContainerProjects className='d-300'>

              <S.CardProject>
                <img src={require('../../Assets/clock.png')} alt="" />

                <h4>Relógio</h4>

                <p>O projeto consiste em um relógio digital com 3 funções, sendo elas: Relógio, Cronômetro e Temporizador.</p>

                <div className='btns-project'>
                  <a className='view-live' href='https://clock-123.netlify.app/'>View Live</a>
                  <a className='github-repo' href='https://github.com/devMatheus20/Clock'>GitHub Repo</a>
                </div>
              </S.CardProject>

              <S.CardProject>
                <img src={require('../../Assets/prime-filmes.png')} alt="" />

                <h4>Filmaria</h4>

                <p>Um site que apresenta alguns filmes através do " consumo " de uma API.</p>

                <div className='btns-project'>
                  <a className='view-live' href='https://prime-filmes.netlify.app/'>View Live</a>
                  <a className='github-repo' href='https://github.com/devMatheus20/Filmaria'>GitHub Repo</a>
                </div>
              </S.CardProject>

              <S.CardProject>
                <img src={require('../../Assets/convert.png')} alt="" />

                <h4>Conversor</h4>

                <p>Conversor de moedas que converte de Real para diferentes moedas.</p>

                <div className='btns-project'>
                  <a className='view-live' href='https://devmatheus20.github.io/currency-converter/'>View Live</a>
                  <a className='github-repo' href='https://github.com/devMatheus20/currency-converter'>GitHub Repo</a>
                </div>
              </S.CardProject>

              <S.CardProject isBoolean={boolean}>
                <img src={require('../../Assets/europay.png')} alt="" />

                <h4>Europay</h4>

                <p>Uma Landing Page de uma empresa chamada Europay.</p>

                <div className='btns-project'>
                  <a className='view-live' href='https://devmatheus20.github.io/europay-page/'>View Live</a>
                  <a className='github-repo' href='https://github.com/devMatheus20/europay-page'>GitHub Repo</a>
                </div>
              </S.CardProject>

              <S.CardProject isBoolean={boolean}>
                <img src={require('../../Assets/fortune-cookie.png')} alt="" />

                <h4>Biscoito da Sorte</h4>

                <p>Projeto feito com objetivo de praticar as tecnologias abordadas.</p>

                <div className='btns-project'>
                  <a className='view-live' href='https://fortune-cookiee.netlify.app'>View Live</a>
                  <a className='github-repo' href='https://github.com/devMatheus20/fortune-cookie'>GitHub Repo</a>
                </div>
              </S.CardProject>

              <S.CardProject isBoolean={boolean}>
                <img src={require('../../Assets/stopwatch.png')} alt="" />

                <h4>Cronômetro</h4>

                <p>Projeto feito com objetivo de praticar as tecnologias abordadas.</p>

                <div className='btns-project'>
                  <a className='view-live' href='https://stopwattch.netlify.app/'>View Live</a>
                  <a className='github-repo' href='https://github.com/devMatheus20/Stopwatch'>GitHub Repo</a>
                </div>
              </S.CardProject>

            </S.ContainerProjects>

            <button className='show-more d-200' onClick={showMore} >{textButton}</button>

          </div>

        </S.Projects>


        <S.Skills id='skills'>

          <div className='grid'>
            <S.ArticleSkills>

              <S.TitleSkills className='d-200'>
                Conhecimentos
                <Point />
              </S.TitleSkills>

              <div className='info-card'>
                <S.CardName>{nameCardSkills}</S.CardName>

                <S.InfoSkills className='d-300'>{textCardSkills}</S.InfoSkills>
              </div>

            </S.ArticleSkills>

            <S.GridSkills className='d-400'>

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
                <img src={require('../../Assets/responsivo.png')} alt="Icone de Responsividade" />
              </S.CardSkill>

              <S.CardSkill onMouseOver={() => changeDescription('acessibilidade')} onMouseOut={clearDescription}>
                <img src={require('../../Assets/acessibilidade.png')} alt="Icone de Acessibilidade" />
              </S.CardSkill>

            </S.GridSkills>
          </div>

        </S.Skills>


        <S.Contact id='contact'>

          <div className='grid'>
            <S.ArticleContact>

              <S.TitleContact className='d-200'>
                Contato
                <Point />
              </S.TitleContact>

              <S.SocialLinks className='d-400'>
                <a href="https://www.linkedin.com/in/matheus-santos-souza/">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>

                <a href="https://github.com/devMatheus20">
                  <img src={GitHub} alt="GitHub" />
                </a>

                <a href="https://discord.gg/gcDrJNpwzz">
                  <img src={Discord} alt="Discord" />

                </a>

                <a href="https://contate.me/mtsantos">
                  <img src={WhatsApp} alt="WhatsApp" />
                </a>
              </S.SocialLinks>

            </S.ArticleContact>

            <S.Form className="d-400" action="https://formsubmit.co/matheussantosdev20@gmail.com" method="POST">
              <label>
                <input type="text" name="Nome" placeholder="Seu nome" required autoComplete="true" />
              </label>

              <label>
                <input type="email" name="Email" placeholder="seuemail@email.com" required autoComplete="true" />
              </label>

              <label>
                <textarea name="Mensagem" placeholder="Deixe sua mensagem"></textarea>
              </label>

              <input type="hidden" name="_captcha" value="false" />

              <button type="submit">
                Enviar
              </button>
            </S.Form>
          </div>

        </S.Contact>

      </main>

      <S.Footer>
        <div className='grid'>
          <p>© 2022 Matheus Santos - Front-End Developer</p>
          <span>All rights reserved ®</span>
        </div>
      </S.Footer>
    </>
  )
}

export default Portfolio
