import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Header.elements";

export default function Header() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Marshmallow.</NavLogo>

        <NavMenu>
          <NavItem>
            <NavLinks>Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Plans</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}
