import React from 'react'
import Nav from './Nav/Nav'
import './header.scss'
import Logo from '../../../gfx/runinc_logo.svg'
import LogoHover from '../../../gfx/runinc_logo_hover.svg'

const Header = () => {
    return (
        <header className="row">
            <section className="logo col-3">
            <picture className="logo_img">
            <img src={Logo} alt="RunInc Logo" />
            </picture>
            <picture className="logo_img--hover">
                <img src={LogoHover} alt="RunInc Logo on hover"/>
            </picture>
            </section>
            <Nav />
        </header>
    )
}

export default Header
