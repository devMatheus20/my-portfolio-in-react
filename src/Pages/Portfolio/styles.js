import styled, { keyframes } from 'styled-components'



// KeyFrames ------------------<

const moveUndraw = keyframes`

from {transform: translateY(0px)}

to  {transform: translateY(-15px);}

`
// ------------------<



// HEADER STYLES ----------------------<

export const Header = styled.header`
    position: fixed;
    top: 0;
    padding: 15px 80px;
    width: 100%;
    border-bottom: 1px solid rgba(114, 114, 126, 0.2);
    opacity: 0.97;
    z-index: 99;
    background-color: #171717;

    .listFade {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        padding-top: 50px;
        position: absolute;
        top: 55px;
        left: 0;
        text-align: center;
        background-color: #171717;
        opacity: 0.97;
    }

    .grid-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;

        @media(max-width:950px) {
            padding: 15px 20px;
            opacity: 0.99;
        }
    }

`

export const Logo = styled.h1`
    text-decoration: none;
    outline: none;

    a {
        font-family: "IBM Plex Sans", sans-serif;
        color: #FAFAFA;
        font-size: 2.5rem;
    }
`

export const List = styled.div`
    display: block;

    @media(max-width:950px) {
        display: none;
    }
`

export const Link = styled.a`
    position: relative;
    margin-right: 32px;
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 400;
    color: #cccccc;
    outline: none;

    @media(max-width:950px) {
        margin-top: 50px;
        font-size: 3.5rem;
    }

    :hover {
        color: #fff;
    }

    ::after  {
        content: "";
        background-color: #FFD700;
        position: absolute;
        top: 35px;
        right: 0px;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s linear;
        border-radius: 0.1rem;
    }

    :hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`

export const Menu = styled.div`

    display: none;
    
    @media(max-width: 950px) {
        display: flex;
        flex-direction: column;
        gap: 7px;
        cursor: pointer;
    }

    div {
        width: 32px;
        height: 2px;
        background-color: #fafafa;
        transition: 0.4s;
    }

    .line-1t {
        transform: rotate(-45deg) translate(-8px, 8px);
    }

    .line-2t {
        opacity: 0;
    }

    .line-3t {
        transform: rotate(45deg) translate(-5px, -5px);
    }
`
// -------------------------------<





// HOME STYLES ----------------------<

export const Home = styled.section`
    margin-top: 100px;
    padding: 120px 40px;

    .grid {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;

        @media(max-width:1200px) {
            flex-direction: column-reverse;
            align-items: center;
            padding: 40px 20px 200px 20px;
            text-align: center;
        }

        @media(max-width:950px) {
            padding: 50px 20px 130px 20px;
        }
    }
`

export const ArticleHome = styled.article`
    width: 60%;
    min-width: 501px;

    margin-left: 2%;

    @media(max-width:1200px) {
        margin-left: 0;
    }

    @media(max-width:950px) {
        min-width: 400px;
    }

    @media(max-width:600px) {
        width: 100%;
        min-width: 350px;
    }

    /* @media(max-width: 420px) {  
        width: 100%;
    } */
`

export const SpanHome = styled.span`
    display: block;
    font-size: 2.2rem;
    color: #FFF5EE;
`

export const H1Home = styled.h1`
    font-size: 6.4rem;
    font-weight: 700;
    color: #FFF5EE;

    @media(max-width:1200px) {
        margin: 3px;
    }
    
    span {
        color: #FFD700;
    }

`

export const ParagraphHome = styled.div`
    position: relative;
    font-size: 2.7rem;
    color: #FFF5EE;

    @media(max-width:1200px) {
        margin-left: 20px;
    }
`

export const ButtonsHome = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    @media(max-width:1200px) {
        justify-content: center;
    }

    .contact {
        display: block;
        max-width: 200px;
        padding: 15px;
        border-radius: 6px;
        border: 1px solid #FAFAFA;
        color: #FAFAFA;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.6rem;
        transition: 0.3s;

        :hover {
            background-color: #FAFAFA;
            color: #000;
        }
    }

    .cv-download {
        display: block;
        max-width: 150px;
        padding: 15px;
        border: 1px solid #FFD700;
        border-radius: 6px;
        color: #FFD700;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.6rem;
        transition: 0.3s;
        outline: none;

        :hover {
            background-color: #FFD700;
            color: #000;
        }
    }
`

export const ImageHome = styled.img`
    position: relative;
    bottom: 60px;
    right: 40px;
    max-width: 36%;
    animation: ${moveUndraw} 1.7s infinite alternate-reverse linear;

    @media(max-width: 1200px) {
        right: 0;
        bottom: 0;
        max-width: 50%;
        margin-bottom: 30px;
    }

    @media(max-width:850px) {
        max-width: 70%;
    }
`

// -------------------------------<



// ABOUT STYLES ----------------------<

export const About = styled.section`
    padding: 80px 20px 90px 0;
    background-color: #191919;

    

    .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;

        @media(max-width:1200px) {
            align-items: center;
            padding: 80px 20px;
        }
    }
`


export const ImageAbout = styled.img`
    max-width: 340px;
    margin-right: 8%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: 1px solid #191919;
    transition: border 1s ease;

    @media(max-width:1200px) {
        display: none;
    }

    :hover {
        border: 1px solid #FFD700;
    }

`

export const ArticleAbout = styled.article`
    max-width: 630px;
    margin-top: -50px;
`

export const TitleAbout = styled.h2`
    margin-bottom: 20px;
    color: #fafafa;
    font-size: 4rem;
    font-weight: 500;
`

export const ParagraphAbout = styled.p`
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #cccccc;

    span {
        color: #FFD700;
        font-weight: 600;
    }
`
// -------------------------------<




// PROJECTS STYLES ----------------------<


export const Projects = styled.section`
    padding: 40px 0 100px 0;

    .show-more {
        display: block;
        margin: 100px auto 0 auto;
        padding: 10px 60px;
        border-radius: 6px;
        border: 1px solid #fff;
        font-size: 1.7rem;
        cursor: pointer;
        font-weight: 550;
        background-color: #171717;
        color: #FFD700;
        outline: none;
        transition: 0.3s;

        :hover {
            background-color: #FFD700;
            border: 1px solid #FFD700;
            color: #000;
        }
    }

    .grid {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
    }
`

export const TitleProjects = styled.h2`
    text-align: center;
    padding-bottom: 24px;
    font-size: 4rem;
    font-weight: 500;
    color: #fafafa;
`

export const ContainerProjects = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    overflow: hidden;
    margin-top: 50px;
    padding: 0 40px;
    transition: height 0.4s ease-in-out;

    @media(max-width: 480px) {
        padding: 0 20px;
    }
`

export const CardProject = styled.div`
    position: relative;
    background-color: #222222;
    display: ${({ isBoolean }) => isBoolean ? 'none' : 'flex'};
    flex-direction: column;
    padding: 20px 15px;
    width: 310px;
    height: 370px;
    border-radius: 8px;
    border: 1px solid #171717;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fafafa;
    text-decoration: none;

    @media(max-width: 600px) {
        height: 380px;
    }

    img {
        background-size: cover;
        background-repeat: no-repeat;
        max-width: 100%;
        height: 165px;
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 0.3s;
    }

    h4 {
        margin-top: 10px;
        font-size: 2rem;
        font-weight: 700;
        color: #FFD700;
    }

    p {
        margin-top: 15px;
        font-size: 1.4rem;
        font-weight: 500;

        @media(max-width:600px) {
            font-size: 2rem;
        }
    }

    .btns-project {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 20px 0;
        position: absolute;
        bottom: 0;

        @media(max-width: 470px) {
            margin-top: 30px;
            flex-wrap: wrap;
        }

        a {
            padding: 10px 20px;
            margin-top: 10px;
            outline: none;
            font-size: 1.3rem;
            font-weight: 550;
            border-radius: 8px;
            text-decoration: none;

            :hover {
                opacity: 0.8;
            }

            :active {
                opacity: 0.5;
            }
        }

        .view-live {
            background-color: #FFD700;
            border: 1px solid #FFD700;
            color: #000;
        }

        .github-repo {
            background-color: #212121;
            border: 1px solid #FFD700;
            color: #fafafa;
        }
    }
`

// -------------------------------<




// Skills STYLES ----------------------<


export const Skills = styled.section`
    padding: 100px 0px;
    background-color: #191919;

    .grid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;

        @media(max-width:1300px) {
            flex-direction: column;
            gap: 0;
            padding: 50px 20px 100px 20px;
            text-align: center;
        }
    }
`

export const ArticleSkills = styled.article`
    width: 80%;
    margin-bottom: 10px;
    width: 80%;
    min-height: 320px;
    min-width: 400px;
    max-width: 450px;

    @media(max-width: 1300px) {
        min-height: 260px;
        min-width: 320px;
    }

    .info-card {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

`

export const TitleSkills = styled.h2`
    font-size: 4rem;
    color: #fafafa;
    margin-bottom: 20px;
`

export const InfoSkills = styled.p`
    font-size: 2.3rem;
    color: #C2C1C2;
`

export const CardName = styled.h4`
    font-weight: 600;
    font-size: 3rem;
    color: #FFD700;
`

export const GridSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;

    @media(max-width:670px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const CardSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border: 1px solid #191919;
    border-radius: 0.1rem;
    transition: 0.8s ease;
    background-color: #212121;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover {
        border: 1px solid #FFD700;
    }

    .card-icon {
        font-size: 85px;
        color: #FFD700;
    }

    .card-icon-2 {
        font-size: 75px;
        border-radius: 5px;
        color: #FFD700;
    }

    img {
        min-width: 70px;
    }
`

// -------------------------------<




// Contact STYLES ----------------------<


export const Contact = styled.section`
    padding: 70px 0 60px 0;

    .grid {
        display: flex;
        justify-content: center;
        gap: 250px;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;

        @media(max-width:1200px) {
            flex-direction: column;
            align-items: center;
            padding: 50px 20px 30px 20px;
            gap: 40px;
        }
    }
`

export const ArticleContact = styled.article`
    display: flex;
    flex-direction: column;

    @media(max-width:1200px) {
        text-align: center;
        min-width: 300px;
        margin-left: 0;
    }
`

export const TitleContact = styled.h2`
    margin-bottom: 25px;
    font-size: 4rem;
    color: #fafafa;
`

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 40px;
    
    @media(max-width:1200px) {
        justify-content: center;
        gap: 20px;
        margin-top: 0;
    }

    img {
        transition: 0.2s;
        
        :hover {
            transform: scale(1.2);
        }
    }
`

export const Form = styled.form`
    height: 390px;
    width: 35%;
    padding: 20px;
    border-radius: 1rem;
    background-color: #171717;

    @media(max-width:1200px) {
        min-width: 360px;
    }

    label {
        display: block;
        margin-bottom: 20px;
        font-size: 1.8rem;
        font-family: "IBM Plex Sans", sans-serif;
        color: #fafafa;
    }

    input {
        display: block;
        width: 100%;
        padding: 15px 0 15px 8px;
        background-color: #343434;
        color: #fafafa;
        border: none;
        border-radius: 8px;
        outline: none;
    }

    textarea {
        display: block;
        width: 100%;
        height: 100px;
        padding: 8px;
        background-color: #343434;
        color: #fafafa;
        border: none;
        border-radius: 8px;
        outline: none;
        resize: none;
    }

    button {
        display: block;
        width: 60%;
        margin-top: 30px;
        padding: 10px 0;
        background-color: #FFD700;
        border: none;
        border-radius: 0.5rem;
        font-size: 2rem;
        font-weight: 550;
        cursor: pointer;
        outline: none;
        transition: all 0.6s ease;

        @media(max-width:1200px) {
            margin: 30px auto;
        }

        :hover {
            width: 70%;
        }
    }
`

// -------------------------------<




// Footer STYLES ----------------------<


export const Footer = styled.footer`    

    .grid {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin: 0 auto;
        padding: 30px 0;
        border-top: 1px solid rgba(114, 114, 126, 0.2);
        font-size: 1.5rem;
        color: #858586;
        max-width: 1300px;

        @media(max-width: 550px) {
            justify-content: space-between;
            font-size: 1.2rem;
        }
    }
`


// -------------------------------<








