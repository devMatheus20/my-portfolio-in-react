import styled from 'styled-components'



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


export const H1 = styled.h1`
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