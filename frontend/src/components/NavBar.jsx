import styled from "styled-components";

const Nav = styled.nav`
  background-color: #0070c9;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <h1>My App</h1>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/scratchers">Scratchers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/logs">Logs</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
