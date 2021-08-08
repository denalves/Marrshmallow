import { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./Header.elements";

export default function Header() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }else {
      setButton(true);
    };
  };

  useEffect(() => {
    showButton();
  },[])

  window.addEventListener('resize', showButton);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={closeMobileMenu} >Marshmallow.</NavLogo>
        <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars style={{color: "#fff"}} />}
            </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Plans</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}
