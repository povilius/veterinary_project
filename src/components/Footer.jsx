import styled from "styled-components"


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return(
    
      <FooterText>Copyright © VetBee {currentYear}. All rights reserved.</FooterText>
    
  )
}

export default Footer

const FooterText = styled.p`
  color: #868686;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 15px;
`