import React, { useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, Mail, Phone } from './NavbarElements'
import AtulFabCareLogo from '../../Images/AFLogo.png';
import { FaPhoneAlt } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <Mail>
                <Phone><FaPhoneAlt /> 8177834444 /  8983606033 / 8983606044 <GoMail /> theatulfabcare@gmail.com</Phone>
            </Mail>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <Logo src={AtulFabCareLogo} alt="Logo" />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/' >
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/aboutus' >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services' >
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contactus'>
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
