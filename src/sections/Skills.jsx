import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { medium,small } from '../responsive';
import { GiBullets } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1rem;
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

`
const InnerContainer=styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
display: flex;

${medium({display:"block"})}
`
const LeftContainer=styled.div`
padding: 8px;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.7rem;
margin-top: 2rem;
${medium({width:"80%"})}
${small({width:"70%"})}

`
const RightContainer=styled.div`
padding: 8px;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.7rem;
margin-top: 2rem;
${medium({width:"80%"})}
${small({width:"70%"})}
`
const InputContainer=styled.div`
background-color: 	#0275d8;
color: white;
padding: 7px;
font-weight: 500;
font-size: 1.4rem;
display: flex;
gap:1rem;

`

export default function Skills() {

    let leftArray=["HTML","CSS","Javascript","Bootstrap"]
    let rightArray=["React","NodeJs","MongoDb & Mysql","AWS"]

    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div id="skills">
             <HeaderContainer>
                    <IconDiv><GiBullets/></IconDiv>
                    <IconHeader>Skills & Technologies</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <LeftContainer data-aos="fade-up-right">
                        
                          {
                              leftArray.map((a)=>{
                                return(
                                    <>
                                    <InputContainer>
                                    <div><FcApproval style={{fontSize:"1.5rem"}}/></div>
                                    <div>{a}</div>
                                    </InputContainer>
                                    </>
                                )
                              })
                          }
                        
                    </LeftContainer>
                    <RightContainer data-aos="fade-up-left">
                    {
                              rightArray.map((a)=>{
                                return(
                                    <>
                                    <InputContainer>
                                    <div><FcApproval style={{fontSize:"1.5rem"}}/></div>
                                    <div>{a}</div>
                                    </InputContainer>
                                    </>
                                )
                              })
                          }
                    </RightContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}
