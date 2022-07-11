import { ContentWrapper, JoinList, Message, SocialIcons } from './styles/S_Content';
import { ImInstagram, ImLinkedin2, ImFacebook, ImTwitter } from 'react-icons/im';
import { Footer } from '../pages/styles/S_Home';
import { useEffect, useState } from 'react';
import ThankYou from './ThankYou';
import axios from 'axios';

const Content = () => {
  const [isFocus, setIsFocus] = useState(false); // runs when input field is focused on
  const [success, setSuccess] = useState(false); // Render thank you component if true (successful)
  const [email, setEmail] = useState(''); // Get user input
  const [error, setError] = useState(null); // Fire error if any
  const [processing, setProcessing] = useState(false); // run while submitting
  const [isMobile, setIsMobile] = useState(false); // change error message position on mobile

  // Handle form submition function 
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form default function
    
    setProcessing(true); // set processing to true (form is submitting)
    try {
      await axios.post('http://localhost:5000/api/users/waitlist', {email}) // post requiest to endpoint
      setSuccess(true); // set success if successful
    } catch (err) {
      setError(err.response.data.error); // set error if any
    }
    setProcessing(false) // end processing (false,)
  }

  useEffect(() => {
    window.innerWidth <= 500 && setIsMobile(true); // set isMobile true if width is 500 down
  }, [])


  return(
    <>
      <ContentWrapper contentDisplay={ success && "none" }> {/* Page Content Container With display none style props if submition successful */}
        <Message> {/* Message Container */}
          <h1>We are coming soon</h1>
          <h2>Something awsome is on the way</h2>
        </Message>

        <JoinList> {/* Form Container */}
          <h3>Be the first to know when its time</h3>
          <form action="/#">
            <div>
              <input 
                type="text" 
                name="email" 
                placeholder="Enter Email" 
                required
                onBlur={() => setIsFocus(false)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => {
                  setError(null);
                  isMobile && setIsFocus(true);
                }}
              />

              {isMobile && <p style={{color: 'crimson'}}>{ error }</p> }
              
              <button onClick={handleSubmit} type="submit" style={{
                cursor: processing ? 'not-allowed' : 'pointer',
                opacity: processing ? '0.6' : '1'
              }}>{processing ? 'Submitting..' : 'Submit'}</button>
            </div>
            {!isMobile && <p style={{color: 'crimson'}}>{ error }</p>}
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