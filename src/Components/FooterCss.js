import styled from "styled-components";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export const GitIcon = styled(FaGithub)`
height: 3rem;
font-size: 1.5em;
color: #f2f2f2;
margin-right: 10px;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover {
    color: #ff3c22 ;
}
`

export const LinkedinIcon = styled(FaLinkedin)`
height: 3rem;
font-size: 1.5em;
color: #f2f2f2;
cursor: pointer;

transition: all 0.3s ease-in-out;

&:hover {
    color: #ff3c22 ;
}
`

export const Footer2 = styled.div`
width: 99%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`



