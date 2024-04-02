import styled from 'styled-components'

const Home = () => {

  return (
    <HomeWrapper>
      <Logo src="../public/logo2.png" alt="" />
      <HomeTitle>Welcome to VetBee veterinary clinic system!</HomeTitle>
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 30px;
`

const Logo = styled.img`
  height: 200px;
`

const HomeTitle = styled.p`
  font-size: 30px;
  color: #6b6b6b;
  font-weight: 600;
`