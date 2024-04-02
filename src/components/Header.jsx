import { Link } from "react-router-dom";
import styled from 'styled-components'



const Header = () => {

  return (
  <NavWrapper>
    <div>
      <Logo src="../logo.png" alt="Logo" />
    </div>
    <LinkWrapp>
      <LogButton className="link-item" to="./">Home</LogButton>
      <LogButton className="link-item" to="./pets">Pets</LogButton>
      <LogButton className="link-item" to="./meds">Medications</LogButton>
    </LinkWrapp>
  </NavWrapper>
  )
}

export default Header

const Logo = styled.img`
  height: 65px;
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`

const LinkWrapp = styled.div`
  display: flex;
  gap: 20px;
`

const LogButton = styled(Link)`
  color: #fc8119;
  text-decoration: none;
  font-weight: 600;
  transition: 300ms;

  &:hover {
    color: #c4691e;
  }
`