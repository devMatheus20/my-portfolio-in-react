import styled, { keyframes } from 'styled-components'



// HEADER STYLES ----------------------<

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 15px 80px;
    width: 100%;
    border-bottom: 1px solid rgba(114, 114, 126, 0.2);
    opacity: 0.97;
    z-index: 99;
    background-color: #171717;

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
`

export const Link = styled.a`
    position: relative;
    margin-right: 32px;
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 400;
    color: #cccccc;
    outline: none;

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
    }

    :hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    
`
// -------------------------------<





// HOME STYLES ----------------------<


// KeyFrames ------------------<

const moveUndraw = keyframes`

from {transform: translateY(0px)}

to  {transform: translateY(-15px);}

`
// ------------------<

export const Home = styled.section`
    display: flex;
    margin-top: 100px;
    padding: 70px 40px;
`

export const ArticleHome = styled.article`
    width: 60%;
    min-width: 501px;
    margin-top: 50px;
    margin-left: 2%;
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
    
    span {
        color: #FFD700;
    }

`

export const ParagraphHome = styled.p`
    position: relative;
    font-size: 2.7rem;
    color: #FFF5EE;


   
`

export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
`

export const ImageHome = styled.img`
    position: relative;
    bottom: 60px;
    right: 40px;
    max-width: 38%;
    animation: ${moveUndraw} 1.7s infinite alternate-reverse linear;

`

// -------------------------------<



// ABOUT STYLES ----------------------<

export const About = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 20px;
    background-color: #191919;
`


export const ImageAbout = styled.img`
    max-width: 340px;
    margin-right: 8%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: 1px solid #191919;
    transition: border 1s ease;

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
`

export const TitleProjects = styled.h2`
    text-align: center;
    padding-bottom: 24px;
    font-size: 4rem;
    font-weight: 500;
    color: #fafafa;
`

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    height: ${({ isHeight }) => isHeight ? '112vh' : '52vh'};
    overflow: hidden;
    margin-top: 50px;
    padding: 0 80px;
    transition: height 0.4s ease-in-out;
`

export const Row1 = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`

export const Row2 = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`

export const CardProject = styled.div`
    background-color: #222222;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    width: 310px;
    height: 370px;
    border-radius: 8px;
    border: 1px solid #171717;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease;
    color: #fafafa;
    text-decoration: none;

    :hover img{
        filter: grayscale(100%);
    }

    img {
        background-size: cover;
        background-repeat: no-repeat;
        max-width: 100%;
        min-height: 50%;
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        filter: grayscale(0%);
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
    }

    .btns-project {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 20px 0;

        button {
            padding: 10px 20px;
            margin-top: 10px;
            outline: none;
            font-size: 1.3rem;
            font-weight: 550;
            border-radius: 8px;
            text-decoration: none;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 0px;
    gap: 100px;
    background-color: #191919;
`

export const ArticleSkills = styled.article`
    width: 80%;
    min-height: 380px;
    min-width: 400px;
    max-width: 450px;
    margin-bottom: 10px;
`

export const TitleSkills = styled.h2`
    font-size: 4rem;
    color: #fafafa;
`

export const InfoSkills = styled.p`
    font-size: 2.3rem;
    color: #C2C1C2;
`

export const CardName = styled.h4`
    margin: 20px 0 10px 0;
    font-weight: 600;
    font-size: 3rem;
    color: #FFD700;
`

export const GridSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
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





