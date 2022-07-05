import styled from 'styled-components';

// Topbar Style
export const Topbar = styled.div`
  height: 100px;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
  
  & > div img {
    width: 35px;
  }

  & > div h2 {
    margin: 3px 0 0 5px;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

// Page Container Style 
export const Container = styled.main`
  max-width: 2000px;
  height: 100vh;
  margin: auto;
  padding: 0 90px;
  background: url('/images/background.jpg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 1005px) {
    background-position: 15%;
  }

  @media (max-width: 500px) {
    padding: 0 40px;
  }

  @media (max-width: 375px) {
    padding: 0 20px; 
  }
`;

// Page Footer Style 
export const Footer = styled.footer`
  width: calc(100% - 180px);
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  & > p {
    padding: 12px 0;
    text-align: right;
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 600px) {
    & > p {
      text-align: center;
    }
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;