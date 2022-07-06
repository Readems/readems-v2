import { ContentWrapper, JoinList, Message, SocialIcons } from './styles/S_Content';
import { ImInstagram, ImLinkedin2, ImFacebook, ImTwitter } from 'react-icons/im';
import { Footer } from '../pages/styles/S_Home';
import { useState } from 'react';
import ThankYou from './ThankYou';

const Content = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form submition function 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle Form submition here

    setSuccess(true);
  }


  return(
    <>
      <ContentWrapper contentDisplay={ success ? "none" : "block" }> {/* Page Content Container With display none style props if submition successful */}
        <Message> {/* Message Container */}
          <h1>We are coming soon</h1>
          <h2>Something awsome is on the way</h2>
        </Message>

        <JoinList> {/* Form Container */}
          <h3>Be the first to know when its time</h3>
          <form action="/#">
            <input 
              type="text" 
              name="email" 
              placeholder="Enter Email" 
              required
              onTouchEnd={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
        </JoinList>
        <SocialIcons> {/* Social Icons Container */}
          <h3>You can follow us</h3>
          <div>
            <a href="/#" ><ImFacebook /></a>
            <a href="/#" ><ImTwitter /></a>
            <a href="/#" ><ImInstagram /></a>
            <a href="/#" ><ImLinkedin2 /></a>
          </div>
        </SocialIcons>
      </ContentWrapper>

      <ThankYou thankYouDisplay={ success ? "block" : "none" } /> {/* Thank you component with display block style props if submition successful | Page is Rendered from |ThankYou.js| */}

      <Footer> {/* Page Footer */}
          { !isFocus && <p>&copy; 2022 Readems</p> }
      </Footer>
    </>
  )
}

export default Content;