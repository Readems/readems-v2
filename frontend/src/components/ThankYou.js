import { Message, SocialIcons } from "./styles/S_Content"
import { ImInstagram, ImLinkedin2, ImFacebook, ImTwitter } from 'react-icons/im';
import { ThankYouWrapper } from "./styles/S_ThankYou";

const ThankYou = ({ thankYouDisplay }) => {
  return(
    <ThankYouWrapper display={thankYouDisplay}> {/* ThankYou Container */}
      <Message> {/* Thank you message | derived styles from |S_Content.js| */}
        <h1>Thank You!</h1>
        <h2>You have been added to the waitlist</h2>
      </Message>

      <SocialIcons> {/* Social Icons | derived styles from |S_Content.js| */}
        <h3>You can follow us</h3>
          <div>
            <a href="/#" ><ImFacebook /></a>
            <a href="/#" ><ImTwitter /></a>
            <a href="/#" ><ImInstagram /></a>
            <a href="/#" ><ImLinkedin2 /></a>
          </div>
      </SocialIcons>
    </ThankYouWrapper>
  )
}

export default ThankYou;