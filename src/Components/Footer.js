import React from 'react'
import {
    GitIcon,
    LinkedinIcon,
    Footer2
} from "./FooterCss"

const Footer = () => {
    return (
        <Footer2 className="footer_container">
            <div className="icons_wrapper">
                <GitIcon onClick={() => window.open("https://github.com/RainbowWZRD")} />
                <LinkedinIcon />
            </div>
            <p style={{
                color: "#f2f2f2", fontFamily: "Poppins"
            }}>Developed with 🥵 by RNBWWZRD</p>
        </Footer2>
    )
}

export default Footer
