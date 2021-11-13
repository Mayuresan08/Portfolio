import styled from "styled-components";

export const ThemeContainer=styled.div`
 color: ${props => props.theme === "light" ? 'rgba(26,32,44,255)': 'white'};
background-color:${props => props.theme === "light" ? 'white' : 'rgba(26,32,44,255)'}; ;
`