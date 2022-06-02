import styled from 'styled-components'


export const About = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 20px;
    background-color: #191919;

`


export const Image = styled.img`
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

export const Article = styled.article`
    max-width: 630px;
`

export const Title = styled.h2 `
    margin-bottom: 20px;
    color: #fafafa;
    font-size: 4rem;
    font-weight: 500;

`

export const Paragraph = styled.p `
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #cccccc;

    span {
        color: #FFD700;
        font-weight: 600;
    }
`