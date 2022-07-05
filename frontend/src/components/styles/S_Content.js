import styled from 'styled-components';

// Page Content Wrapper Style
export const ContentWrapper = styled.div`
  display: ${({ contentDisplay }) => contentDisplay}; // Change display if form submistion successful

  height: calc(100vh - 150px);
  width: 50%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1005px) {
    width: 70%;
  }

  @media (max-width: 770px) {
    width: 100%;
  }

`;

// We are comming soon Message Style 
export const Message = styled.div`
margin: 80px 0;

& h1 {
  font-size: 55px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.blue};
}

& h2 {
  font-size: 28px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 15px;
}

@media (max-width: 1188px) {
  & h1 {
    font-size: 45px;
  }
}

@media (max-width: 600px) {
  margin-top: 40px;

  & h1 {
    font-size: 30px;
  }

  & h2 {
    font-size: 20px;
  }
}

@media(max-width: 375px) {
  & h2 {
    font-size: 16px;
  }
}

@media(max-width: 600px) {
  text-align: center;
}

@media(min-width: 1646px) {
  margin: 150px 0;

  & h1 {
    font-size: 80px;
  }

  & h2 {
    font-size: 38px;
  }
}
`;

// Page Form style 
export const JoinList = styled.div`
  & h3 {
    font-size: 17px;
    text-align: center;
    width: calc(100% - 140px);
    color: ${({ theme }) => theme.colors.black};
  }

  & form {
    display: flex;
    margin: 20px 0 50px 0;
  }

  & form input {
    width: 100%;
    padding: 14px;
    font-size: 19px;
    border: none;
    background: ${({ theme }) => theme.colors.fadeBlue};
  }

  & form button {
    width: 200px;
    font-size: 19px;
    border: none;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  @media (max-width: 600px) {
    & h3 {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    & form {
      flex-direction: column;
      align-items: center;
    }

    & form input {
      width: calc(100% - 40px);
      padding: 20px;
    }

    & form button {
      padding: 20px;
      width: 150px;
      margin: 20px 0 0 0;
    }
  }
`;

// Social Icons Style 
export const SocialIcons = styled.div`
  & h3 {
    color: ${({ theme }) => theme.colors.lightBlack};
    margin-bottom: 15px;
  }

  & > div {
    display: flex;
    flex-flow: wrap;
    gap: 12px;
  }

  & > div a {
    background: ${({ theme }) => theme.colors.blue};
    height: 25px;
    width: 25px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    padding: 5px;
  }

  & > div svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 600px) {
    & > div {
      justify-content: center;
    }
  }

  @media (max-width: 500px) {
    & > div {
      gap: 25px;
    }
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;