import React from 'react'
import styled from 'styled-components'
import { medium } from '../responsive';
import { AiOutlineContacts,AiOutlineMail } from "react-icons/ai";
import { FiSmartphone,FiMapPin } from "react-icons/fi";
import { small } from '../responsive';
const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
`
const IconDiv=styled.div`
color: grey;
font-size: 3.5rem;
`
const IconHeader=styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container=styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;

`
const InnerContainer=styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
${medium({display:"block"})}
`

const QuestionHeader=styled.div`
display:flex;
justify-content: start;
width: 100%;
font-size: 2rem;
font-weight:600;
`
const Discuss=styled.div`
display: flex;
justify-content: center;
`
const ContactContainer=styled.div`
margin-top: 4rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 1rem;
`
const Button=styled.button`
${small({width:"15rem"})}
`
export default function Contact() {
    return (
        <div id="contacts">
            <HeaderContainer>
                    <IconDiv><AiOutlineContacts/></IconDiv>
                    <IconHeader>Contact</IconHeader>
            </HeaderContainer>
            <Container>
               <InnerContainer>
                   <QuestionHeader>
                       Having an Idea/Project in mind?
                   </QuestionHeader>
                        <Discuss >
                            <button className="btn btn-success" style={{fontSize:"1.7rem",marginRight:"4rem"}}><a style={{color:"inherit",textDecoration:"none"}} href="mailto:mayublade@gmail.com">Let's Discuss </a></button>
                        </Discuss>
                        <ContactContainer>
                            <div ><Button  className="btn btn-primary p-3"><AiOutlineMail/><a style={{color:"inherit",textDecoration:"none"}} href="mailto:mayublade@gmail.com">mayublade@gmail.com</a></Button></div>
                            <div ><Button  className="btn btn-primary p-3"><FiSmartphone/><a style={{color:"inherit",textDecoration:"none"}} href="tel:+918870293627">+91-8870293637</a></Button></div>
                            <div ><Button  className="btn btn-primary p-3"><FiMapPin/>Trichy,Tamilnadu</Button></div>
                        </ContactContainer>
               </InnerContainer>
            </Container>
        </div>
    )
}
