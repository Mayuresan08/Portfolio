import React,{useContext} from 'react'
import { ThemeContainer } from '../theme'
import { ThemeContext } from '../context'
import TopNavbar from '../sections/Navbar'
import Home from '../sections/Home'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Main() {
    const {theme}=useContext(ThemeContext)

    return (
        <div>
            <ThemeContainer theme={theme}>
                <TopNavbar/>
                <Home/>
                <Projects/>
                <Skills/>
                <Contact/>
                <Footer/>
            </ThemeContainer>
        </div>
    )
}
