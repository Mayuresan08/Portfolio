import React from 'react'
import styled from 'styled-components'
import Wave from 'react-wavify'
import TextTransition, { presets } from "react-text-transition";
import { HiDocumentDownload } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
import Resume from "../assets/Mayuresan_Yokendran.pdf"
import {Link as LinkS} from 'react-scroll' 


const MainContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 14rem;
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    color: white;

`

const MainDiv=styled.div`
flex: 1;
`

const Container=styled.div`
display: flex;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:3rem;
text-align: center;
`

const HeaderContainer=styled.div`
color:#0275d8;
font-size: 4rem;
font-weight: 700;
text-align: center;
`
const SContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
`
const TContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
color:#0275d8;
`

export default function Home() {
    const [index, setIndex] = React.useState(0);
    const TEXTS = [
        "React",
        "NodeJs",
        "MongoDB",
        "Express",
        "AWS"
      ];
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1500 
      );
      return () => clearTimeout(intervalId);
    }, []);
    return (
        <div id="home">
        <MainContainer>

            <MainDiv>
                <Container className="text-justify" >
                    <HeaderContainer> Mayuresan Yokendran</HeaderContainer>
                    <SContainer ><p >Full stack Developer who likes building stuffs with</p></SContainer>
                    <TContainer>
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                    </TContainer>
                    <SContainer>
                        <button className="btn btn-success"><a style={{color:"inherit",textDecoration:"none"}} href={Resume} download><HiDocumentDownload style={{fontSize:"1.5rem"}}/>Resume</a></button>
                        <button className="btn btn-secondary mx-2"> <AiFillAppstore style={{fontSize:"1.5rem"}}/>
                        <NavLinks to='projects' spy={true} smooth={true}  duration={500}>Project</NavLinks>
                        </button>
                    </SContainer>
                </Container>
        </MainDiv >

        <MainDiv  className="d-flex flex-column justify-content-end " >
            <div>
         <Wave  fill='#0275d8'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.50,
          points: 3
        }}
        />
        </div>
        </MainDiv>
        </MainContainer>
        </div>
    )
  }
