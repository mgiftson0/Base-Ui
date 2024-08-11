import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../images/logo.svg";

const theme = createTheme();

const PageWrapper = styled.section`
  background: #17132a url("../images/bg.jpeg");
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

const SidebarWrapper = styled.aside`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: ${({ isOpen }) => (isOpen ? "190px" : "56px")};
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  transition: width 0.45s;
  z-index: 1000;

  @media (max-width: 768px) {
    left: ${({ isOpen }) => (isOpen ? "0" : "-56px")};
    top: 0;
    bottom: 0;
    border-radius: 0;
  }
`;

const SidebarInner = styled.div`
  width: 190px;
`;

const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 6px;
`;

const BurgerButton = styled.button`
  width: 44px;
  height: 64px;
  display: grid;
  place-items: center;
  background: none;
  border: none;
  color: #f9f9f9;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 18px;
  margin-left: 6px;
`;

const Nav = styled.nav`
  display: grid;
  padding: 0 6px;
  gap: 2px;
`;

const NavButton = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 44px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-transform: capitalize;
  line-height: 1;
  padding: 0 12px;
  border-radius: 8px;
  opacity: 0.7;
  color: #f9f9f9;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s, background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const navItems = [
  { label: "Home", icon: HomeIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Build", icon: BuildIcon },
  { label: "Cloud", icon: CloudIcon },
  { label: "Mail", icon: MailIcon }
];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <SidebarWrapper isOpen={isOpen}>
          <SidebarInner>
            <SidebarHeader>
              <BurgerButton onClick={toggleSidebar}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </BurgerButton>
              {(!isMobile || isOpen) && <Logo src={logo} alt="logo" />}
            </SidebarHeader>
            <Nav>
              {navItems.map((item) => (
                <NavButton key={item.label}>
                  <item.icon />
                  {(!isMobile || isOpen) && <span>{item.label}</span>}
                </NavButton>
              ))}
            </Nav>
          </SidebarInner>
        </SidebarWrapper>
        {isMobile && isOpen && <Overlay onClick={toggleSidebar} />}
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Sidebar3;
