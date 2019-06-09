import Link from 'next/link';
import FbLogo from '../components/fblogo'
import TwitterLogo from '../components/twitterlogo'

const footerStyle = {
  position: 'relative',
  bottom: 0,
  display: 'block',
  width: '100%',
  background: '#F2F2F2'
};

const linkStyle = {
  marginRight: 15,
};

const socialStyle ={
  width: '20%',
  textAlign: 'center',
  margin: 'auto',
  display: 'inline-flex',
}
const Footer = () => (
  <div className="header-container">
    <div style={footerStyle}>
      <div className="social-bar" style={socialStyle}>
        <FbLogo />
        <TwitterLogo />
      </div>
    </div>
  </div>
);

export default Footer;
