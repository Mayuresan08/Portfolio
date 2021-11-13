import React from 'react'
import styled from 'styled-components'
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";


const Container=styled.div`
background-color: lightgrey;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgba(26,32,44,255);
font-size: 1.3rem;
font-weight: 700;
gap: 0.5rem;
`
const FooterBottom=styled.div`
display: flex;
gap: 1rem;
font-size: 1.7rem;
`
export default function Footer() {
    return (
        <div id="footer">
            <Container>
                <div>Mayuresan Yokendran</div>
                <FooterBottom>
                <div ><a style={{color:"inherit",textDecoration:"none"}} href="https://github.com/Mayuresan08" target="_blank" rel="noreferrer"><AiFillGithub/></a></div>
                <div ><a style={{color:"inherit",textDecoration:"none"}} href="https://www.linkedin.com/in/mayuresan/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a></div>
                <div ><a style={{color:"inherit",textDecoration:"none"}} href="https://medium.com/@mayublade" target="_blank" rel="noreferrer"><FaBlogger/></a></div>
                </FooterBottom>
            </Container>
        </div>
    )
}
