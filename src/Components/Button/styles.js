import styled from "styled-components";



export const Button = styled.a`
    background-color: transparent;
    display: block;
    max-width: 200px;    
    padding: 15px;
    border-radius: 6px;
    border: ${props => props.isWhite ? '1px solid #FAFAFA' : '1px solid #FFD700'};
    color: ${props => props.isWhite ? '#FAFAFA' : '#FFD700'};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.6rem;
    transition: 0.3s;


    :hover {
        background-color: ${props => props.isWhite ? '#FAFAFA' : '#FFD700'};
        color: black;
    }

`
