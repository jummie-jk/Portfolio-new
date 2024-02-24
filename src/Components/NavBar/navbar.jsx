import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import logo from '../../assets/logonew.png'
import "./navbar.css"
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: var(--nav-text-color)
  padding: 1rem;
  font-family: 'Manrope' , sans-serif;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 3rem 3rem;
  font-size: 16px;

  a {
    color: var(--nav-text-color)
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #D3E97A;
    }
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;
export const NavBar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return(
        <div className="navbar-main">
            <Nav>
                <div><img src={logo} alt="logo" className="NavLogo"/></div>
                <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                    {isMobileNavOpen ? 'Close' : 'Menu'}
                </MobileNavToggle>
                <DesktopNav>
                    <NavItem><a href="/">Home</a></NavItem>
                    <NavItem><a href="/all-projects">Projects</a></NavItem>
                    <NavItem><a href="/about">About</a></NavItem>
                    <NavItem><a href="/contact">Contact</a></NavItem>
                </DesktopNav>
                <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
                    <NavItem><a href="/">Home</a></NavItem>
                    <NavItem><a href="/">About</a></NavItem>
                    <NavItem><a href="/">Services</a></NavItem>
                    <NavItem><a href="/">Contact</a></NavItem>
                </MobileNav>
         </Nav>
        </div>
    )
}