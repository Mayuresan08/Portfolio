import React,{useState,useContext} from 'react'
import { ThemeContext } from '../context'
import { Navbar,Container,Nav } from 'react-bootstrap'
import Logo from "../assets/mayuLogo1.PNG"
import styled from 'styled-components'
import "./Navbar.css"
import { BsFillSunFill,BsFillMoonFill } from "react-icons/bs";
import {Link as LinkS} from 'react-scroll' 
import { small } from '../responsive'


const Image = styled.img`
    height:50px;
    border-radius: 20px;
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
`

const BarNav=styled(Navbar)`
background-color:${props => props.theme === "light" ? 'white' : 'rgba(26,32,44,255)'} !important; 
color: #1919a5 !important;
position: fixed;
width:100%;
top:0;
z-index:1;
`

const Button=styled.div`
border-radius: 50%;
color: goldenrod !important;
font-size: 1.3rem;
transition:all 0.2s linear;
${small({display:"none"})}
&:hover {
     color:grey !important;
     transform: scale(1.1);
    }
`
const Button1=styled.div`
border-radius: 50%;
color: goldenrod !important;
font-size: 1.3rem;
transition:all 0.2s linear;
display: none;
${small({display:"inline-block"})}
&:hover {
     color:grey !important;
     transform: scale(1.1);
    }
`
export default function TopNavbar() {
    const [themeButton,setThemeButton]=useState("dark")
    const {theme,changeTheme}=useContext(ThemeContext)
    console.log(theme)

    const handleTheme=()=>{

    changeTheme()

      if(themeButton==="dark")  setThemeButton("light")
      else setThemeButton("dark")
    }

    return (
        <div>
            <BarNav theme={theme}  expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <Image src={Logo}/>
        <Button1 className="btn navbtn" onClick={handleTheme} style={{borderRadius:"50%",color:"grey",fontSize:"1.4rem"}}>
        {
            themeButton === "light"? <BsFillMoonFill/>:<BsFillSunFill/>
        }
        </Button1>
        </Navbar.Brand>
    <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" style={{backgroundColor:"red !important",color:"white"}}/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="ms-auto" style={{fontWeight:"600" ,fontSize:"1.3rem"}}>
        <Nav.Link className="text-primary " href="#home">
        <NavLinks to='home' spy={true} smooth={true}  duration={500}>Home</NavLinks>
        </Nav.Link>
        <Nav.Link className="text-primary " href="#home">
        <NavLinks to='projects' spy={true} smooth={true}  duration={500}>Projects</NavLinks>
        </Nav.Link>
        <Nav.Link className="text-primary " href="#home">
        <NavLinks to='skills' spy={true} smooth={true}  duration={500}>Skills</NavLinks>
        </Nav.Link>
        <Nav.Link className="text-primary " href="#home">
        <NavLinks to='contacts' spy={true} smooth={true} duration={500}>Contact</NavLinks>
        </Nav.Link>
        <Button className="btn navbtn" onClick={handleTheme} style={{borderRadius:"50%",color:"grey",fontSize:"1.4rem"}}>
        {
             themeButton === "light"? <BsFillMoonFill/>:<BsFillSunFill/>
        }
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</BarNav>
        </div>
    )
}
