import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  Button
} from "./Header.elements";

export default function Header() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Marshmallow.</NavLogo>

        <NavMenu>
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
